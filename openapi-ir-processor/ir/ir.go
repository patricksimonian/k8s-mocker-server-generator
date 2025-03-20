package ir

import (
	"encoding/json"
	"fmt"
	"regexp"
	"strings"

	"github.com/jinzhu/inflection"
)

var operationalVerbs = []string{
	"/finalize", "/binding", "/eviction", "/scale", "/status", "/token", "/approval", "/log",
	"/exec", "/attach", "/portforward", "/proxy", "/redirect", "/watch", "/connect", "/bind",
	"/metrics", "/metrics/proxy", "/metrics/portforward",
}

// isVersion checks if a segment matches a version pattern like "v1" or "v1beta1".
func isVersion(segment string) bool {
	re := regexp.MustCompile(`^v\d+((alpha|beta)\d+)?$`)
	return re.MatchString(segment)
}

// convertPath converts Swagger-style paths with {param} to Express-style :param.
func convertPath(swaggerPath string) string {
	result := swaggerPath
	result = strings.ReplaceAll(result, "{", ":")
	result = strings.ReplaceAll(result, "}", "")
	return result
}

// generateOperationID creates a fallback operation ID.
func generateOperationID(method, path string) string {
	cleanPath := strings.ReplaceAll(path, "/", "_")
	return strings.ToLower(method) + cleanPath
}

// mergeParameters merges global (path-level) parameters with operation-level parameters.
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

// deriveResourceTypeForEndpointFromPath uses a path-based heuristic to derive the resource type.
// It splits the path into segments and, if it finds a known subresource (e.g., "status", "scale"),
// it returns the segment preceding it. Otherwise, it returns the last non-parameter segment.
// Additionally, if the path is very short or ends with a version, it returns "discovery".
func deriveResourceTypeForEndpointFromPath(path string) string {
	trimmed := strings.Trim(path, "/")
	segments := strings.Split(trimmed, "/")
	if len(segments) == 0 {
		return "discovery"
	}
	// If the path is very short, treat it as discovery.
	if len(segments) <= 2 {
		return "discovery"
	}
	// If the last segment is a version and the path has few segments, treat as discovery.
	last := segments[len(segments)-1]
	if isVersion(last) && len(segments) <= 3 {
		return "discovery"
	}
	// Iterate backward, skipping parameters.
	for i := len(segments) - 1; i >= 0; i-- {
		seg := segments[i]
		if strings.HasPrefix(seg, ":") {
			continue
		}
		// Check if seg is a known subresource.
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
		return inflection.Singular(strings.ToLower(parts[len(parts)-1]))
	}
	return strings.ToLower(modelName)
}

// --- You'll need to import the inflection package: go get github.com/jinzhu/inflection ---

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
			isOperational := isOperationalEndpoint(convertedPath)
			resourceTypePath := convertedPath
			if isOperational != "" {
				fmt.Printf("Operational endpoint: %v\n", resourceTypePath)
				resourceTypePath = isOperational
			}

			resourceType := deriveResourceTypeForEndpointFromPath(resourceTypePath)
			if isOperational != "" {
				fmt.Printf("Operational endpoint rt: %v\n", resourceType)
			}
			// If resourceType is empty or looks like a version, set as "discovery".
			if resourceType == "" || isVersion(resourceType) {
				resourceType = "discovery"
			}

			// check if its an operational endpoint

			// Determine if the endpoint is namespaced by checking if the path contains "namespaces".
			// unless it is the endpoint for namespaces themselves ie .
			namespaced := strings.Contains(convertedPath, "namespaces") && !isNamespaceEndpoint(resourceTypePath)

			endpoint := Endpoint{
				OperationID:  op.OperationID,
				Method:       strings.ToLower(key),
				Path:         convertedPath,
				Summary:      op.Summary,
				Description:  op.Description,
				Tags:         op.Tags,
				ResourceType: resourceType,
				Namespaced:   namespaced,
				Operational:  isOperational != "",
				Parameters:   convertToIRParameters(mergedParams),
				Responses:    convertToIRResponses(op.Responses, ir.Models),
			}

			ir.Endpoints = append(ir.Endpoints, endpoint)
		}
	}

	return ir
}

// Checks if endpoint ends with the operational verbs
//
//	"/finalize", "/binding", "/eviction", "/scale", "/status", "/token",
//
// "/approval", "/log", "/eec", "/attach", "/portforward", "/proxy", "/redirect", "/watch", "/connect", "/bind", "/metrics", "/metrics/proxy", "/metrics/portforward
// if operational endpoint return the endpoint minus the verbs otherwise return ""
func isOperationalEndpoint(endpoint string) string {

	for _, verb := range operationalVerbs {
		if strings.HasSuffix(endpoint, verb) {
			return strings.TrimSuffix(endpoint, verb)
		}
	}
	return ""
}

func isNamespaceEndpoint(endpoint string) bool {
	return strings.HasSuffix(endpoint, "namespaces") || strings.HasSuffix(endpoint, "namespaces/:name")
}
