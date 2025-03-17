package foo

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"os"
	"strings"
)

// SwaggerSpec represents a simplified structure of the Swagger spec.
type SwaggerSpec struct {
	Swagger     string                          `json:"swagger"`
	Info        map[string]interface{}          `json:"info"`
	BasePath    string                          `json:"basePath"`
	Paths       map[string]map[string]Operation `json:"paths"`
	Definitions map[string]json.RawMessage      `json:"definitions"`
}

// Operation holds the details for each API operation.
type Operation struct {
	OperationID string              `json:"operationId"`
	Summary     string              `json:"summary"`
	Description string              `json:"description"`
	Parameters  []Parameter         `json:"parameters"`
	Responses   map[string]Response `json:"responses"`
	Tags        []string            `json:"tags"`
}

// Parameter represents an API parameter.
type Parameter struct {
	Name        string  `json:"name"`
	In          string  `json:"in"` // path, query, header, body
	Required    bool    `json:"required"`
	Type        string  `json:"type"`   // basic type (string, integer, etc.)
	Schema      *Schema `json:"schema"` // for body parameters
	Description string  `json:"description"`
}

// Response represents an API response.
type Response struct {
	Description string  `json:"description"`
	Schema      *Schema `json:"schema"`
}

// Schema represents a JSON schema for models and parameters.
type Schema struct {
	Type                 string            `json:"type"`
	Format               string            `json:"format"`
	Properties           map[string]Schema `json:"properties"`
	Required             []string          `json:"required"`
	Enum                 []interface{}     `json:"enum"`
	Items                *Schema           `json:"items"`
	Description          string            `json:"description"`
	AdditionalProperties interface{}       `json:"additionalProperties"`
	Ref                  string            `json:"$ref"`
}

// --- Detailed IR definitions ---

// IR is the top-level Intermediate Representation.
type IR struct {
	Title     string
	Version   string
	BasePath  string
	Endpoints []Endpoint
	Models    map[string]Model
}

// Endpoint represents an API endpoint in the IR.
type Endpoint struct {
	OperationID string
	Method      string // e.g., "get", "post", etc.
	Path        string // Converted to Express-style (e.g., "/api/v1/resource/:id")
	Summary     string
	Description string
	Tags        []string
	Parameters  []IRParameter
	Responses   map[string]IRResponse
}

// IRParameter represents a parameter (query, path, header, body) in the IR.
type IRParameter struct {
	Name        string
	In          string
	Required    bool
	Type        string
	Description string
	Schema      *Schema
}

// IRResponse represents a response in the IR.
type IRResponse struct {
	StatusCode  string
	Description string
	Schema      *Schema
}

// Model represents a data model derived from Swagger definitions.
type Model struct {
	Name   string
	Schema Schema
}

func main() {
	if len(os.Args) < 2 {
		fmt.Println("Usage: irgenerator <path-to-dereferenced-swagger.json>")
		os.Exit(1)
	}

	filename := os.Args[1]
	data, err := ioutil.ReadFile(filename)
	if err != nil {
		fmt.Printf("Error reading file: %v\n", err)
		os.Exit(1)
	}

	var spec SwaggerSpec
	err = json.Unmarshal(data, &spec)
	if err != nil {
		fmt.Printf("Error parsing JSON: %v\n", err)
		os.Exit(1)
	}

	ir := GenerateIR(spec)

	// For demonstration, print a summary of endpoints.
	for _, ep := range ir.Endpoints {
		fmt.Printf("Endpoint: %s %s - %s\n", strings.ToUpper(ep.Method), ep.Path, ep.OperationID)
	}

	// Optionally, output the complete IR as JSON.
	irJSON, _ := json.MarshalIndent(ir, "", "  ")
	fmt.Println("\n--- Detailed IR ---")
	fmt.Println(string(irJSON))
}

// GenerateIR converts the Swagger spec into a detailed IR.
func GenerateIR(spec SwaggerSpec) IR {
	ir := IR{
		Title:     spec.Info["title"].(string),
		Version:   spec.Info["version"].(string),
		BasePath:  spec.BasePath,
		Endpoints: []Endpoint{},
		Models:    make(map[string]Model),
	}

	// Process API endpoints.
	for rawPath, methods := range spec.Paths {
		// Convert Swagger path (with {param}) to Express style (with :param).
		path := convertPath(rawPath)
		for method, op := range methods {
			// Fallback if OperationID is missing.
			if op.OperationID == "" {
				op.OperationID = generateOperationID(method, rawPath)
			}
			endpoint := Endpoint{
				OperationID: op.OperationID,
				Method:      strings.ToLower(method),
				Path:        path,
				Summary:     op.Summary,
				Description: op.Description,
				Tags:        op.Tags,
				Parameters:  []IRParameter{},
				Responses:   make(map[string]IRResponse),
			}

			// Process parameters.
			for _, param := range op.Parameters {
				irp := IRParameter{
					Name:        param.Name,
					In:          param.In,
					Required:    param.Required,
					Type:        param.Type,
					Description: param.Description,
					Schema:      param.Schema,
				}
				endpoint.Parameters = append(endpoint.Parameters, irp)
			}

			// Process responses.
			for code, resp := range op.Responses {
				endpoint.Responses[code] = IRResponse{
					StatusCode:  code,
					Description: resp.Description,
					Schema:      resp.Schema,
				}
			}

			ir.Endpoints = append(ir.Endpoints, endpoint)
		}
	}

	// Process models from Definitions.
	for name, rawDef := range spec.Definitions {
		var schema Schema
		err := json.Unmarshal(rawDef, &schema)
		if err != nil {
			fmt.Printf("Error parsing definition %s: %v\n", name, err)
			continue
		}
		ir.Models[name] = Model{
			Name:   name,
			Schema: schema,
		}
	}

	return ir
}

// convertPath converts Swagger-style paths with {param} to Express-style :param.
func convertPath(swaggerPath string) string {
	result := swaggerPath
	result = strings.ReplaceAll(result, "{", ":")
	result = strings.ReplaceAll(result, "}", "")
	return result
}

// generateOperationID creates a fallback OperationID using the HTTP method and path.
func generateOperationID(method, path string) string {
	cleanPath := strings.ReplaceAll(path, "/", "_")
	return strings.ToLower(method) + cleanPath
}
