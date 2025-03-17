package ir

import (
	"encoding/json"
	"fmt"
	"strings"
)

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

// convertToIRParameters converts a slice of Parameter to IRParameter.
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

// resolveSchema checks if a schema has a $ref and returns the resolved schema from models.
func resolveSchema(s *Schema, models map[string]Model) *Schema {
	if s == nil {
		return nil
	}
	if s.Ref != "" {
		parts := strings.Split(s.Ref, "/")
		if len(parts) > 0 {
			modelName := parts[len(parts)-1]
			if model, ok := models[modelName]; ok {
				return &model.Schema
			}
		}
	}
	return s
}

// convertToIRResponses converts responses map and resolves any schema references.
func convertToIRResponses(resps map[string]Response, models map[string]Model) map[string]IRResponse {
	irResps := make(map[string]IRResponse)
	for code, r := range resps {
		resolved := resolveSchema(r.Schema, models)
		irResps[code] = IRResponse{
			StatusCode:  code,
			Description: r.Description,
			Schema:      resolved,
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
		ir.Models[name] = Model{
			Name:   name,
			Schema: schema,
		}
	}

	// Process each path.
	for path, raw := range spec.Paths {
		// Unmarshal the raw JSON for each path into a generic map.
		var rawMap map[string]json.RawMessage
		if err := json.Unmarshal(raw, &rawMap); err != nil {
			fmt.Printf("Error unmarshalling path %q: %v\n", path, err)
			continue
		}

		// Extract global parameters (if any).
		var globalParams []Parameter
		if rawParams, ok := rawMap["parameters"]; ok {
			if err := json.Unmarshal(rawParams, &globalParams); err != nil {
				fmt.Printf("Error unmarshalling global parameters for path %q: %v\n", path, err)
			}
		}

		// Process each key that represents an HTTP method.
		for key, opRaw := range rawMap {
			if !ValidMethods[strings.ToLower(key)] {
				continue
			}

			var op Operation
			if err := json.Unmarshal(opRaw, &op); err != nil {
				fmt.Printf("Error unmarshalling operation for path %q method %q: %v\n", path, key, err)
				continue
			}

			// Merge global parameters with operation-level parameters.
			mergedParams := mergeParameters(globalParams, op.Parameters)
			// Generate OperationID if missing.
			if op.OperationID == "" {
				op.OperationID = generateOperationID(key, path)
			}

			endpoint := Endpoint{
				OperationID: op.OperationID,
				Method:      strings.ToLower(key),
				Path:        convertPath(path),
				Summary:     op.Summary,
				Description: op.Description,
				Tags:        op.Tags,
				Parameters:  convertToIRParameters(mergedParams),
				Responses:   convertToIRResponses(op.Responses, ir.Models),
			}

			ir.Endpoints = append(ir.Endpoints, endpoint)
		}
	}

	return ir
}
