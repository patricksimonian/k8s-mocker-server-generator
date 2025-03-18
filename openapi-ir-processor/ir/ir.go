package ir

import (
	"encoding/json"
	"fmt"
	"regexp"
	"strings"

	"github.com/jinzhu/inflection"
)

func convertPath(swaggerPath string) string {
	result := swaggerPath
	result = strings.ReplaceAll(result, "{", ":")
	result = strings.ReplaceAll(result, "}", "")
	return result
}

func generateOperationID(method, path string) string {
	cleanPath := strings.ReplaceAll(path, "/", "_")
	return strings.ToLower(method) + cleanPath
}

func mergeParameters(global, operation []Parameter) []Parameter {
	return append(global, operation...)
}

func convertToIRParameters(params []Parameter) []IRParameter {
	var irParams []IRParameter
	for _, p := range params {
		irParams = append(irParams, IRParameter{
			Name:        p.Name,
			In:          p.In,
			Required:    p.Required,
			Type:        p.Type,
			Description: p.Description,
			Schema:      p.Schema,
		})
	}
	return irParams
}

// isVersion checks if a segment matches a version pattern like "v1" or "v1beta1".
func isVersion(segment string) bool {
	re := regexp.MustCompile(`^v\d+((alpha|beta)\d+)?$`)
	return re.MatchString(segment)
}

// deriveResourceTypeForEndpointFromPath derives the resource type from an endpoint path.
// It uses a path-based heuristic: if the path appears to be a discovery endpoint, it returns "discovery".
// Otherwise, it iterates backwards over the segments (skipping parameters) to find the resource name.
// If the last segment is a version (and the path is very short), we treat it as discovery.
func deriveResourceTypeForEndpointFromPath(path string) string {
	trimmed := strings.Trim(path, "/")
	segments := strings.Split(trimmed, "/")
	if len(segments) == 0 {
		return "discovery"
	}

	// If the entire path is very short, e.g. "/api" or "/apis", treat as discovery.
	if len(segments) <= 2 {
		return "discovery"
	}

	// If the last segment looks like a version and the path has few segments, treat as discovery.
	last := segments[len(segments)-1]
	if isVersion(last) && len(segments) <= 3 {
		return "discovery"
	}

	// Iterate backwards, skipping parameters.
	for i := len(segments) - 1; i >= 0; i-- {
		seg := segments[i]
		if strings.HasPrefix(seg, ":") {
			continue
		}
		// Check if seg is a known subresource; if so, use the previous segment.
		subresources := map[string]bool{
			"status":   true,
			"scale":    true,
			"bind":     true,
			"bindings": true,
		}
		if subresources[seg] && i > 0 {
			prev := segments[i-1]
			if !strings.HasPrefix(prev, ":") {
				return inflection.Singular(prev)
			}
		}
		return inflection.Singular(seg)
	}
	return "discovery"
}

// deriveResourceTypeForModel derives the resource type from the model name by splitting on ".".
func deriveResourceTypeForModel(modelName string) string {
	parts := strings.Split(modelName, ".")
	if len(parts) > 0 {
		// Normalize to singular form to match the endpoint.
		return inflection.Singular(strings.ToLower(parts[len(parts)-1]))
	}
	return strings.ToLower(modelName)
}

// convertToIRResponses simply maps responses; you could add deep resolution here if needed.
func convertToIRResponses(resps map[string]Response, models map[string]Model) map[string]IRResponse {
	irResps := make(map[string]IRResponse)
	for code, r := range resps {
		irResps[code] = IRResponse{
			StatusCode:  code,
			Description: r.Description,
			Schema:      r.Schema,
		}
	}
	return irResps
}

// --- Generate IR from SwaggerSpec ---

func GenerateIR(spec SwaggerSpec) IR {
	ir := IR{
		Title:     spec.Info["title"].(string),
		Version:   spec.Info["version"].(string),
		BasePath:  spec.BasePath,
		Endpoints: []Endpoint{},
		Models:    make(map[string]Model),
	}

	// Process models from Definitions.
	for name, rawDef := range spec.Definitions {
		var schema Schema
		if err := json.Unmarshal(rawDef, &schema); err != nil {
			fmt.Printf("Error parsing definition %s: %v\n", name, err)
			continue
		}
		model := Model{
			Name:         name,
			Schema:       schema,
			ResourceType: deriveResourceTypeForModel(name),
		}
		ir.Models[name] = model
	}

	// Process each path.
	for path, raw := range spec.Paths {
		var rawMap map[string]json.RawMessage
		if err := json.Unmarshal(raw, &rawMap); err != nil {
			fmt.Printf("Error unmarshalling path %q: %v\n", path, err)
			continue
		}

		var globalParams []Parameter
		if rawParams, ok := rawMap["parameters"]; ok {
			if err := json.Unmarshal(rawParams, &globalParams); err != nil {
				fmt.Printf("Error unmarshalling global parameters for path %q: %v\n", path, err)
			}
		}

		for key, opRaw := range rawMap {
			if !ValidMethods[strings.ToLower(key)] {
				continue
			}

			var op Operation
			if err := json.Unmarshal(opRaw, &op); err != nil {
				fmt.Printf("Error unmarshalling operation for path %q method %q: %v\n", path, key, err)
				continue
			}

			mergedParams := mergeParameters(globalParams, op.Parameters)
			if op.OperationID == "" {
				op.OperationID = generateOperationID(key, path)
			}

			convertedPath := convertPath(path)
			resourceType := deriveResourceTypeForEndpointFromPath(convertedPath)
			// If the resourceType is empty or looks like a version, treat it as "discovery".
			if resourceType == "" || isVersion(resourceType) {
				resourceType = "discovery"
			}

			endpoint := Endpoint{
				OperationID:  op.OperationID,
				Method:       strings.ToLower(key),
				Path:         convertedPath,
				Summary:      op.Summary,
				Description:  op.Description,
				Tags:         op.Tags,
				ResourceType: resourceType,
				Parameters:   convertToIRParameters(mergedParams),
				Responses:    convertToIRResponses(op.Responses, ir.Models),
			}

			ir.Endpoints = append(ir.Endpoints, endpoint)
		}
	}

	return ir
}
