// // ir.go
// package main

// import (
// 	"encoding/json"
// 	"fmt"
// 	"io/ioutil"
// 	"os"
// 	"regexp"
// 	"strings"
// )

// // // SwaggerSpec represents a simplified structure of the Swagger spec.
// //
// //	type SwaggerSpec struct {
// //		Swagger     string                          `json:"swagger"`
// //		Info        map[string]interface{}          `json:"info"`
// //		BasePath    string                          `json:"basePath"`
// //		Paths       map[string]map[string]Operation `json:"paths"`
// //		Definitions map[string]json.RawMessage      `json:"definitions"`
// //	}
// type SwaggerSpec struct {
// 	Swagger     string                     `json:"swagger"`
// 	Info        map[string]interface{}     `json:"info"`
// 	BasePath    string                     `json:"basePath"`
// 	Paths       map[string]json.RawMessage `json:"paths"`
// 	Definitions map[string]json.RawMessage `json:"definitions"`
// }

// // Operation holds the details for each API operation.
// type Operation struct {
// 	OperationID string              `json:"operationId"`
// 	Summary     string              `json:"summary"`
// 	Description string              `json:"description"`
// 	Parameters  []Parameter         `json:"parameters"`
// 	Responses   map[string]Response `json:"responses"`
// 	Tags        []string            `json:"tags"`
// }

// // Parameter represents an API parameter.
// type Parameter struct {
// 	Name        string  `json:"name"`
// 	In          string  `json:"in"` // path, query, header, body
// 	Required    bool    `json:"required"`
// 	Type        string  `json:"type"`   // basic type (string, integer, etc.)
// 	Schema      *Schema `json:"schema"` // for body parameters
// 	Description string  `json:"description"`
// }

// // Response represents an API response.
// type Response struct {
// 	Description string  `json:"description"`
// 	Schema      *Schema `json:"schema"`
// }

// // Schema represents a JSON schema for models and parameters.
// type Schema struct {
// 	Type                 string            `json:"type"`
// 	Format               string            `json:"format"`
// 	Properties           map[string]Schema `json:"properties"`
// 	Required             []string          `json:"required"`
// 	Enum                 []interface{}     `json:"enum"`
// 	Items                *Schema           `json:"items"`
// 	Description          string            `json:"description"`
// 	AdditionalProperties interface{}       `json:"additionalProperties"`
// 	Ref                  string            `json:"$ref"`
// }

// // --- Detailed IR definitions ---

// // IR is the top-level Intermediate Representation.
// type IR struct {
// 	Title     string
// 	Version   string
// 	BasePath  string
// 	Endpoints []Endpoint
// 	Models    map[string]Model
// }

// // Endpoint represents an API endpoint in the IR.
// type Endpoint struct {
// 	OperationID string
// 	Method      string // e.g., "get", "post", etc.
// 	Path        string // Converted to Express-style (e.g., "/api/v1/resource/:id")
// 	Summary     string
// 	Description string
// 	Tags        []string
// 	Parameters  []IRParameter
// 	Responses   map[string]IRResponse
// }

// // IRParameter represents a parameter (query, path, header, body) in the IR.
// type IRParameter struct {
// 	Name        string
// 	In          string
// 	Required    bool
// 	Type        string
// 	Description string
// 	Schema      *Schema
// }

// // IRResponse represents a response in the IR.
// type IRResponse struct {
// 	StatusCode  string
// 	Description string
// 	Schema      *Schema
// }

// // Model represents a data model derived from Swagger definitions.
// type Model struct {
// 	Name   string
// 	Schema Schema
// }

// func main() {
// 	if len(os.Args) < 2 {
// 		fmt.Println("Usage: irgenerator <path-to-dereferenced-swagger.json>")
// 		os.Exit(1)
// 	}

// 	filename := os.Args[1]
// 	data, err := ioutil.ReadFile(filename)
// 	if err != nil {
// 		fmt.Printf("Error reading file: %v\n", err)
// 		os.Exit(1)
// 	}
// 	//

// 	//
// 	var spec SwaggerSpec
// 	err = json.Unmarshal(data, &spec)

// 	for p, raw := range spec.Paths {
// 		var opMap map[string]Operation
// 		if err := json.Unmarshal(raw, &opMap); err != nil {
// 			fmt.Printf("Error unmarshalling path %q: %v\n", p, err)
// 		} else {
// 			fmt.Printf("Path %q parsed successfully.\n", p)
// 		}
// 	}
// 	if err != nil {
// 		fmt.Println("Error unmarshalling JSON:", err)
// 		// Attempt to extract offset from error message.
// 		re := regexp.MustCompile(`offset (\d+)`)
// 		matches := re.FindStringSubmatch(err.Error())
// 		if len(matches) == 2 {
// 			var offset int
// 			fmt.Sscanf(matches[1], "%d", &offset)
// 			line := getLineNumber(data, offset)
// 			fmt.Printf("Error near line %d (offset %d)\n", line, offset)
// 		}
// 		fmt.Printf("Error parsing JSON: %v\n", err)
// 		os.Exit(1)
// 	}

// 	ir := GenerateIR(spec)

// 	// For demonstration, print a summary of endpoints.
// 	for _, ep := range ir.Endpoints {
// 		fmt.Printf("Endpoint: %s %s - %s\n", strings.ToUpper(ep.Method), ep.Path, ep.OperationID)
// 	}

// 	// Optionally, output the complete IR as JSON.
// 	irJSON, _ := json.MarshalIndent(ir, "", "  ")
// 	fmt.Println("\n--- Detailed IR ---")
// 	fmt.Println(string(irJSON))
// }

// // GenerateIR converts the Swagger spec into a detailed IR.
// func GenerateIR(spec SwaggerSpec) IR {
// 	ir := IR{
// 		Title:     spec.Info["title"].(string),
// 		Version:   spec.Info["version"].(string),
// 		BasePath:  spec.BasePath,
// 		Endpoints: []Endpoint{},
// 		Models:    make(map[string]Model),
// 	}

// 	// Process API endpoints.
// 	for rawPath, methods := range spec.Paths {
// 		// Convert Swagger path (with {param}) to Express style (with :param).
// 		path := convertPath(rawPath)
// 		for method, op := range methods {
// 			// Fallback if OperationID is missing.
// 			if op.OperationID == "" {
// 				op.OperationID = generateOperationID(method, rawPath)
// 			}
// 			endpoint := Endpoint{
// 				OperationID: op.OperationID,
// 				Method:      strings.ToLower(method),
// 				Path:        path,
// 				Summary:     op.Summary,
// 				Description: op.Description,
// 				Tags:        op.Tags,
// 				Parameters:  []IRParameter{},
// 				Responses:   make(map[string]IRResponse),
// 			}

// 			// Process parameters.
// 			for _, param := range op.Parameters {
// 				irp := IRParameter{
// 					Name:        param.Name,
// 					In:          param.In,
// 					Required:    param.Required,
// 					Type:        param.Type,
// 					Description: param.Description,
// 					Schema:      param.Schema,
// 				}
// 				endpoint.Parameters = append(endpoint.Parameters, irp)
// 			}

// 			// Process responses.
// 			for code, resp := range op.Responses {
// 				endpoint.Responses[code] = IRResponse{
// 					StatusCode:  code,
// 					Description: resp.Description,
// 					Schema:      resp.Schema,
// 				}
// 			}

// 			ir.Endpoints = append(ir.Endpoints, endpoint)
// 		}
// 	}

// 	// Process models from Definitions.
// 	for name, rawDef := range spec.Definitions {
// 		var schema Schema
// 		err := json.Unmarshal(rawDef, &schema)
// 		if err != nil {
// 			fmt.Printf("Error parsing definition %s: %v\n", name, err)
// 			continue
// 		}
// 		ir.Models[name] = Model{
// 			Name:   name,
// 			Schema: schema,
// 		}
// 	}

// 	return ir
// }

// // convertPath converts Swagger-style paths with {param} to Express-style :param.
// func convertPath(swaggerPath string) string {
// 	result := swaggerPath
// 	result = strings.ReplaceAll(result, "{", ":")
// 	result = strings.ReplaceAll(result, "}", "")
// 	return result
// }

// // generateOperationID creates a fallback OperationID using the HTTP method and path.
// func generateOperationID(method, path string) string {
// 	cleanPath := strings.ReplaceAll(path, "/", "_")
// 	return strings.ToLower(method) + cleanPath
// }

//	func getLineNumber(data []byte, offset int) int {
//		line := 1
//		for i := 0; i < offset && i < len(data); i++ {
//			if data[i] == '\n' {
//				line++
//			}
//		}
//		return line
//	}

// VERSION 2
// package main

// import (
// 	"encoding/json"
// 	"fmt"
// 	"io/ioutil"
// 	"os"
// 	"strings"
// )

// // Operation holds the details for each API operation.
// type Operation struct {
// 	OperationID string              `json:"operationId"`
// 	Summary     string              `json:"summary"`
// 	Description string              `json:"description"`
// 	Parameters  []Parameter         `json:"parameters"`
// 	Responses   map[string]Response `json:"responses"`
// 	Tags        []string            `json:"tags"`
// }

// // Parameter represents an API parameter.
// type Parameter struct {
// 	Name        string  `json:"name"`
// 	In          string  `json:"in"` // path, query, header, body
// 	Required    bool    `json:"required"`
// 	Type        string  `json:"type"`   // basic type (string, integer, etc.)
// 	Schema      *Schema `json:"schema"` // for body parameters
// 	Description string  `json:"description"`
// }

// // Response represents an API response.
// type Response struct {
// 	Description string  `json:"description"`
// 	Schema      *Schema `json:"schema"`
// }

// // Schema represents a JSON schema for models and parameters.
// type Schema struct {
// 	Type                 string            `json:"type"`
// 	Format               string            `json:"format"`
// 	Properties           map[string]Schema `json:"properties"`
// 	Required             []string          `json:"required"`
// 	Enum                 []interface{}     `json:"enum"`
// 	Items                *Schema           `json:"items"`
// 	Description          string            `json:"description"`
// 	AdditionalProperties interface{}       `json:"additionalProperties"`
// 	Ref                  string            `json:"$ref"`
// }

// // SwaggerSpec represents the simplified structure of the Swagger spec.
// type SwaggerSpec struct {
// 	Swagger     string                     `json:"swagger"`
// 	Info        map[string]interface{}     `json:"info"`
// 	BasePath    string                     `json:"basePath"`
// 	Paths       map[string]json.RawMessage `json:"paths"`
// 	Definitions map[string]json.RawMessage `json:"definitions"`
// }

// // generateOperationID creates a fallback OperationID using the HTTP method and path.
// func generateOperationID(method, path string) string {
// 	cleanPath := strings.ReplaceAll(path, "/", "_")
// 	return strings.ToLower(method) + cleanPath
// }

// func main() {
// 	if len(os.Args) < 2 {
// 		fmt.Println("Usage: go run main.go <path-to-dereferenced-swagger.json>")
// 		os.Exit(1)
// 	}

// 	filename := os.Args[1]
// 	data, err := ioutil.ReadFile(filename)
// 	if err != nil {
// 		fmt.Printf("Error reading file: %v\n", err)
// 		os.Exit(1)
// 	}

// 	var spec SwaggerSpec
// 	err = json.Unmarshal(data, &spec)
// 	if err != nil {
// 		fmt.Printf("Error parsing JSON: %v\n", err)
// 		os.Exit(1)
// 	}

// 	// Iterate over each path in the spec.
// 	for path, raw := range spec.Paths {
// 		// Unmarshal the raw JSON into a map where keys are HTTP methods (get, post, etc.)
// 		var opMap map[string]Operation
// 		err := json.Unmarshal(raw, &opMap)
// 		if err != nil {
// 			fmt.Printf("Error unmarshalling path %q: %v\n", path, err)
// 			continue
// 		}

// 		// Process each HTTP method for this path.
// 		for method, op := range opMap {
// 			// Fallback: generate an OperationID if missing.
// 			if op.OperationID == "" {
// 				op.OperationID = generateOperationID(method, path)
// 			}
// 			fmt.Printf("Path: %q, Method: %s\n", path, strings.ToUpper(method))
// 			fmt.Printf("  OperationID: %s\n", op.OperationID)
// 			fmt.Printf("  Summary: %s\n", op.Summary)
// 			fmt.Printf("  Description: %s\n", op.Description)
// 			fmt.Printf("  Tags: %v\n", op.Tags)
// 			// You can also loop over parameters and responses here.
// 		}
// 	}
// }

// VERSION 3

// package main

// import (
// 	"encoding/json"
// 	"fmt"
// 	"io/ioutil"
// 	"os"
// 	"strings"
// )

// // Valid HTTP methods (lowercase)
// var validMethods = map[string]bool{
// 	"get":     true,
// 	"post":    true,
// 	"put":     true,
// 	"delete":  true,
// 	"patch":   true,
// 	"options": true,
// 	"head":    true,
// }

// // Parameter represents an API parameter.
// type Parameter struct {
// 	Name        string  `json:"name"`
// 	In          string  `json:"in"` // "path", "query", "header", "body"
// 	Required    bool    `json:"required"`
// 	Type        string  `json:"type"`   // basic type (string, integer, etc.)
// 	Schema      *Schema `json:"schema"` // for body parameters
// 	Description string  `json:"description"`
// }

// // Response represents an API response.
// type Response struct {
// 	Description string  `json:"description"`
// 	Schema      *Schema `json:"schema"`
// }

// // Schema represents a JSON schema for models and parameters.
// type Schema struct {
// 	Type                 string            `json:"type"`
// 	Format               string            `json:"format"`
// 	Properties           map[string]Schema `json:"properties"`
// 	Required             []string          `json:"required"`
// 	Enum                 []interface{}     `json:"enum"`
// 	Items                *Schema           `json:"items"`
// 	Description          string            `json:"description"`
// 	AdditionalProperties interface{}       `json:"additionalProperties"`
// 	Ref                  string            `json:"$ref"`
// }

// // Operation holds the details for an API operation.
// type Operation struct {
// 	OperationID string              `json:"operationId"`
// 	Summary     string              `json:"summary"`
// 	Description string              `json:"description"`
// 	Parameters  []Parameter         `json:"parameters"`
// 	Responses   map[string]Response `json:"responses"`
// 	Tags        []string            `json:"tags"`
// }

// // SwaggerSpec represents the high-level Swagger spec.
// type SwaggerSpec struct {
// 	Swagger     string                     `json:"swagger"`
// 	Info        map[string]interface{}     `json:"info"`
// 	BasePath    string                     `json:"basePath"`
// 	Paths       map[string]json.RawMessage `json:"paths"`
// 	Definitions map[string]json.RawMessage `json:"definitions"`
// }

// // --- Intermediate Representation (IR) Types ---

// // IR is our top-level IR.
// type IR struct {
// 	Title     string
// 	Version   string
// 	BasePath  string
// 	Endpoints []Endpoint
// 	Models    map[string]Model
// }

// // Endpoint represents an API endpoint with merged parameters.
// type Endpoint struct {
// 	OperationID string
// 	Method      string // "get", "post", etc.
// 	Path        string // Express-style path (e.g. "/api/v1/pets/:id")
// 	Summary     string
// 	Description string
// 	Tags        []string
// 	Parameters  []IRParameter // merged global and operation-level parameters
// 	Responses   map[string]IRResponse
// }

// // IRParameter is a simplified parameter for code generation.
// type IRParameter struct {
// 	Name        string
// 	In          string
// 	Required    bool
// 	Type        string
// 	Description string
// 	Schema      *Schema
// }

// // IRResponse represents a response.
// type IRResponse struct {
// 	StatusCode  string
// 	Description string
// 	Schema      *Schema
// }

// // Model represents a data model.
// type Model struct {
// 	Name   string
// 	Schema Schema
// }

// // --- Helper Functions for IR Generation ---

// // convertPath converts Swagger-style paths with {param} to Express-style :param.
// func convertPath(swaggerPath string) string {
// 	result := swaggerPath
// 	result = strings.ReplaceAll(result, "{", ":")
// 	result = strings.ReplaceAll(result, "}", "")
// 	return result
// }

// // generateOperationID creates a fallback operation ID.
// func generateOperationID(method, path string) string {
// 	cleanPath := strings.ReplaceAll(path, "/", "_")
// 	return strings.ToLower(method) + cleanPath
// }

// // mergeParameters combines global (path-level) parameters with operation-level ones.
// func mergeParameters(global, operation []Parameter) []Parameter {
// 	return append(global, operation...)
// }

// // convertToIRParameters converts a list of Parameter to IRParameter.
// func convertToIRParameters(params []Parameter) []IRParameter {
// 	var irParams []IRParameter
// 	for _, p := range params {
// 		irParams = append(irParams, IRParameter{
// 			Name:        p.Name,
// 			In:          p.In,
// 			Required:    p.Required,
// 			Type:        p.Type,
// 			Description: p.Description,
// 			Schema:      p.Schema,
// 		})
// 	}
// 	return irParams
// }

// // convertToIRResponses converts responses map.
// func convertToIRResponses(resps map[string]Response, models map[string]Model) map[string]IRResponse {
// 	irResps := make(map[string]IRResponse)
// 	for code, r := range resps {
// 		resolved := resolveSchema(r.Schema, models)
// 		irResps[code] = IRResponse{
// 			StatusCode:  code,
// 			Description: r.Description,
// 			Schema:      resolved,
// 		}
// 	}
// 	return irResps
// }

// // --- Generate IR from SwaggerSpec ---
// func GenerateIR(spec SwaggerSpec) IR {
// 	ir := IR{
// 		Title:     spec.Info["title"].(string),
// 		Version:   spec.Info["version"].(string),
// 		BasePath:  spec.BasePath,
// 		Endpoints: []Endpoint{},
// 		Models:    make(map[string]Model),
// 	}

// 	// Process each path.
// 	for path, raw := range spec.Paths {
// 		// Unmarshal the raw JSON for each path into a generic map.
// 		var rawMap map[string]json.RawMessage
// 		if err := json.Unmarshal(raw, &rawMap); err != nil {
// 			fmt.Printf("Error unmarshalling path %q: %v\n", path, err)
// 			continue
// 		}

// 		// Extract global parameters (if any).
// 		var globalParams []Parameter
// 		if rawParams, ok := rawMap["parameters"]; ok {
// 			if err := json.Unmarshal(rawParams, &globalParams); err != nil {
// 				fmt.Printf("Error unmarshalling global parameters for path %q: %v\n", path, err)
// 			}
// 		}

// 		// Process each key that represents an HTTP method.
// 		for key, opRaw := range rawMap {
// 			if !validMethods[strings.ToLower(key)] {
// 				continue
// 			}

// 			var op Operation
// 			if err := json.Unmarshal(opRaw, &op); err != nil {
// 				fmt.Printf("Error unmarshalling operation for path %q method %q: %v\n", path, key, err)
// 				continue
// 			}

// 			// If operation-level parameters are missing, they default to empty.
// 			mergedParams := mergeParameters(globalParams, op.Parameters)
// 			// If OperationID is missing, generate one.
// 			if op.OperationID == "" {
// 				op.OperationID = generateOperationID(key, path)
// 			}

// 			endpoint := Endpoint{
// 				OperationID: op.OperationID,
// 				Method:      strings.ToLower(key),
// 				Path:        convertPath(path),
// 				Summary:     op.Summary,
// 				Description: op.Description,
// 				Tags:        op.Tags,
// 				Parameters:  convertToIRParameters(mergedParams),
// 				Responses:   convertToIRResponses(op.Responses),
// 			}

// 			ir.Endpoints = append(ir.Endpoints, endpoint)
// 		}
// 	}

// 	// Process models from Definitions.
// 	for name, rawDef := range spec.Definitions {
// 		var schema Schema
// 		if err := json.Unmarshal(rawDef, &schema); err != nil {
// 			fmt.Printf("Error parsing definition %s: %v\n", name, err)
// 			continue
// 		}
// 		ir.Models[name] = Model{
// 			Name:   name,
// 			Schema: schema,
// 		}
// 	}

// 	return ir
// }

// func main() {
// 	if len(os.Args) < 2 {
// 		fmt.Println("Usage: go run ir_full.go <path-to-dereferenced-swagger.json>")
// 		os.Exit(1)
// 	}

// 	filename := os.Args[1]
// 	data, err := ioutil.ReadFile(filename)
// 	if err != nil {
// 		fmt.Printf("Error reading file: %v\n", err)
// 		os.Exit(1)
// 	}

// 	var spec SwaggerSpec
// 	err = json.Unmarshal(data, &spec)
// 	if err != nil {
// 		fmt.Printf("Error parsing JSON: %v\n", err)
// 		os.Exit(1)
// 	}

// 	ir := GenerateIR(spec)

// 	// For demonstration, print out each endpoint.
// 	for _, ep := range ir.Endpoints {
// 		fmt.Printf("Endpoint: %s %s (OperationID: %s)\n", strings.ToUpper(ep.Method), ep.Path, ep.OperationID)
// 		fmt.Printf("  Summary: %s\n", ep.Summary)
// 		fmt.Printf("  Description: %s\n", ep.Description)
// 		fmt.Printf("  Tags: %v\n", ep.Tags)
// 		fmt.Printf("  Parameters:\n")
// 		for _, p := range ep.Parameters {
// 			fmt.Printf("    - %s (%s) required: %t\n", p.Name, p.In, p.Required)
// 		}
// 		fmt.Println("  Responses:")
// 		for code, r := range ep.Responses {
// 			fmt.Printf("    %s: %s\n", code, r.Description)
// 		}
// 		fmt.Println()
// 	}

// 	// Optionally, print the entire IR as JSON.
// 	irJSON, err := json.MarshalIndent(ir, "", "  ")
// 	if err == nil {
// 		fmt.Println("--- Full IR ---")
// 		fmt.Println(string(irJSON))
// 	}
// }

//	func resolveSchema(s *Schema, models map[string]Model) *Schema {
//		if s == nil {
//			return nil
//		}
//		if s.Ref != "" {
//			// s.Ref is expected to be of the form "#/definitions/ModelName"
//			parts := strings.Split(s.Ref, "/")
//			if len(parts) > 0 {
//				modelName := parts[len(parts)-1]
//				if model, ok := models[modelName]; ok {
//					// Return the resolved schema. Depending on your needs,
//					// you might want to merge s's fields with model.Schema.
//					return &model.Schema
//				}
//			}
//		}
//		return s
//	}
//
// VERSOPM 4
package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"os"
	"strings"
)

// --- Swagger Spec Structures ---

// Parameter represents an API parameter.
type Parameter struct {
	Name        string  `json:"name"`
	In          string  `json:"in"` // "path", "query", "header", "body"
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

// Operation holds the details for an API operation.
type Operation struct {
	OperationID string              `json:"operationId"`
	Summary     string              `json:"summary"`
	Description string              `json:"description"`
	Parameters  []Parameter         `json:"parameters"`
	Responses   map[string]Response `json:"responses"`
	Tags        []string            `json:"tags"`
}

// SwaggerSpec represents a simplified structure of the Swagger spec.
type SwaggerSpec struct {
	Swagger     string                     `json:"swagger"`
	Info        map[string]interface{}     `json:"info"`
	BasePath    string                     `json:"basePath"`
	Paths       map[string]json.RawMessage `json:"paths"`
	Definitions map[string]json.RawMessage `json:"definitions"`
}

// --- IR Structures ---

// IR is our top-level Intermediate Representation.
type IR struct {
	Title     string
	Version   string
	BasePath  string
	Endpoints []Endpoint
	Models    map[string]Model
}

// Endpoint represents an API endpoint with merged parameters.
type Endpoint struct {
	OperationID string
	Method      string // "get", "post", etc.
	Path        string // Express-style path (e.g. "/api/v1/pets/:id")
	Summary     string
	Description string
	Tags        []string
	Parameters  []IRParameter // merged global and operation-level parameters
	Responses   map[string]IRResponse
}

// IRParameter is a simplified parameter for code generation.
type IRParameter struct {
	Name        string
	In          string
	Required    bool
	Type        string
	Description string
	Schema      *Schema
}

// IRResponse represents a response.
type IRResponse struct {
	StatusCode  string
	Description string
	Schema      *Schema
}

// Model represents a data model.
type Model struct {
	Name   string
	Schema Schema
}

// --- Helper Functions ---

// validMethods defines the HTTP methods we expect.
var validMethods = map[string]bool{
	"get":     true,
	"post":    true,
	"put":     true,
	"delete":  true,
	"patch":   true,
	"options": true,
	"head":    true,
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
			if !validMethods[strings.ToLower(key)] {
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

// --- Main ---

func main() {
	if len(os.Args) < 2 {
		fmt.Println("Usage: go run ir_full_models.go <path-to-dereferenced-swagger.json>")
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

	// For demonstration, print out each endpoint.
	for _, ep := range ir.Endpoints {
		fmt.Printf("Endpoint: %s %s (OperationID: %s)\n", strings.ToUpper(ep.Method), ep.Path, ep.OperationID)
		fmt.Printf("  Summary: %s\n", ep.Summary)
		fmt.Printf("  Description: %s\n", ep.Description)
		fmt.Printf("  Tags: %v\n", ep.Tags)
		fmt.Printf("  Parameters:\n")
		for _, p := range ep.Parameters {
			fmt.Printf("    - %q (%s) required: %t\n", p.Name, p.In, p.Required)
		}
		fmt.Printf("  Responses:\n")
		for code, r := range ep.Responses {
			fmt.Printf("    %s: %s, Schema: %+v\n", code, r.Description, r.Schema)
		}
		fmt.Println()
	}

	// Optionally, print the complete IR as JSON.
	irJSON, err := json.MarshalIndent(ir, "", "  ")
	if err == nil {
		fmt.Println("--- Full IR ---")
		fmt.Println(string(irJSON))
	}
}

// VERSION 5

// package main

// import (
// 	"encoding/json"
// 	"fmt"
// 	"io/ioutil"
// 	"os"
// 	"strings"
// )

// // --- Swagger Spec Structures ---

// // Parameter represents an API parameter.
// type Parameter struct {
// 	Name        string  `json:"name"`
// 	In          string  `json:"in"` // "path", "query", "header", "body"
// 	Required    bool    `json:"required"`
// 	Type        string  `json:"type"`   // basic type (string, integer, etc.)
// 	Schema      *Schema `json:"schema"` // for body parameters
// 	Description string  `json:"description"`
// }

// // Response represents an API response.
// type Response struct {
// 	Description string  `json:"description"`
// 	Schema      *Schema `json:"schema"`
// }

// // Schema represents a JSON schema for models and parameters.
// type Schema struct {
// 	Type                 string            `json:"type"`
// 	Format               string            `json:"format"`
// 	Properties           map[string]Schema `json:"properties"`
// 	Required             []string          `json:"required"`
// 	Enum                 []interface{}     `json:"enum"`
// 	Items                *Schema           `json:"items"`
// 	Description          string            `json:"description"`
// 	AdditionalProperties interface{}       `json:"additionalProperties"`
// 	Ref                  string            `json:"$ref"`
// }

// // Operation holds the details for an API operation.
// type Operation struct {
// 	OperationID string              `json:"operationId"`
// 	Summary     string              `json:"summary"`
// 	Description string              `json:"description"`
// 	Parameters  []Parameter         `json:"parameters"`
// 	Responses   map[string]Response `json:"responses"`
// 	Tags        []string            `json:"tags"`
// }

// // SwaggerSpec represents a simplified structure of the Swagger spec.
// type SwaggerSpec struct {
// 	Swagger     string                     `json:"swagger"`
// 	Info        map[string]interface{}     `json:"info"`
// 	BasePath    string                     `json:"basePath"`
// 	Paths       map[string]json.RawMessage `json:"paths"`
// 	Definitions map[string]json.RawMessage `json:"definitions"`
// }

// // --- IR Structures ---

// // IR is our top-level Intermediate Representation.
// type IR struct {
// 	Title     string
// 	Version   string
// 	BasePath  string
// 	Endpoints []Endpoint
// 	Models    map[string]Model
// }

// // Endpoint represents an API endpoint with merged parameters.
// type Endpoint struct {
// 	OperationID string
// 	Method      string // "get", "post", etc.
// 	Path        string // Express-style path (e.g. "/api/v1/pets/:id")
// 	Summary     string
// 	Description string
// 	Tags        []string
// 	Parameters  []IRParameter // merged global and operation-level parameters
// 	Responses   map[string]IRResponse
// }

// // IRParameter is a simplified parameter for code generation.
// type IRParameter struct {
// 	Name        string
// 	In          string
// 	Required    bool
// 	Type        string
// 	Description string
// 	Schema      *Schema
// }

// // IRResponse represents a response.
// type IRResponse struct {
// 	StatusCode  string
// 	Description string
// 	Schema      *Schema
// }

// // Model represents a data model.
// type Model struct {
// 	Name   string
// 	Schema Schema
// }

// // --- Helper Functions ---

// // validMethods defines the HTTP methods we expect.
// var validMethods = map[string]bool{
// 	"get":     true,
// 	"post":    true,
// 	"put":     true,
// 	"delete":  true,
// 	"patch":   true,
// 	"options": true,
// 	"head":    true,
// }

// // convertPath converts Swagger-style paths with {param} to Express-style :param.
// func convertPath(swaggerPath string) string {
// 	result := swaggerPath
// 	result = strings.ReplaceAll(result, "{", ":")
// 	result = strings.ReplaceAll(result, "}", "")
// 	return result
// }

// // generateOperationID creates a fallback operation ID.
// func generateOperationID(method, path string) string {
// 	cleanPath := strings.ReplaceAll(path, "/", "_")
// 	return strings.ToLower(method) + cleanPath
// }

// // mergeParameters merges global (path-level) parameters with operation-level parameters.
// func mergeParameters(global, operation []Parameter) []Parameter {
// 	return append(global, operation...)
// }

// // convertToIRParameters converts a slice of Parameter to IRParameter.
// func convertToIRParameters(params []Parameter) []IRParameter {
// 	var irParams []IRParameter
// 	for _, p := range params {
// 		irParams = append(irParams, IRParameter{
// 			Name:        p.Name,
// 			In:          p.In,
// 			Required:    p.Required,
// 			Type:        p.Type,
// 			Description: p.Description,
// 			Schema:      p.Schema,
// 		})
// 	}
// 	return irParams
// }

// // --- Deep Reference Resolution ---

// // deepResolveSchema recursively resolves $ref fields in a schema using the models map.
// func deepResolveSchema(s *Schema, models map[string]Model, visited map[string]bool) *Schema {
// 	if s == nil {
// 		return nil
// 	}

// 	// If this schema has a $ref, attempt to resolve it.
// 	if s.Ref != "" {
// 		parts := strings.Split(s.Ref, "/")
// 		if len(parts) > 0 {
// 			modelName := parts[len(parts)-1]
// 			// Check if we've already visited this reference to avoid recursion.
// 			if visited[modelName] {
// 				// Already visited, so return s as-is (or you might return nil or an error).
// 				return s
// 			}
// 			// Mark as visited.
// 			visited[modelName] = true

// 			if model, ok := models[modelName]; ok {
// 				// Create a copy of the model's schema.
// 				resolved := model.Schema
// 				// Recursively resolve nested references in the resolved schema.
// 				resolved = *deepResolveSchema(&resolved, models, visited)
// 				// Unmark after resolution to allow reuse in other branches.
// 				visited[modelName] = false
// 				return &resolved
// 			}
// 		}
// 	}
// 	// Recursively resolve properties.
// 	if s.Properties != nil {
// 		for k, prop := range s.Properties {
// 			s.Properties[k] = *deepResolveSchema(&prop, models, visited)
// 		}
// 	}
// 	// Resolve array items.
// 	if s.Items != nil {
// 		s.Items = deepResolveSchema(s.Items, models, visited)
// 	}
// 	return s
// }
// func resolveSchemaDeep(s *Schema, models map[string]Model) *Schema {
// 	visited := make(map[string]bool)
// 	return deepResolveSchema(s, models, visited)
// }

// // convertToIRResponses converts responses and uses deep resolution on schemas.
// func convertToIRResponses(resps map[string]Response, models map[string]Model) map[string]IRResponse {
// 	irResps := make(map[string]IRResponse)
// 	for code, r := range resps {
// 		resolved := resolveSchemaDeep(r.Schema, models)
// 		irResps[code] = IRResponse{
// 			StatusCode:  code,
// 			Description: r.Description,
// 			Schema:      resolved,
// 		}
// 	}
// 	return irResps
// }

// // --- Generate IR from SwaggerSpec ---

// func GenerateIR(spec SwaggerSpec) IR {
// 	ir := IR{
// 		Title:     spec.Info["title"].(string),
// 		Version:   spec.Info["version"].(string),
// 		BasePath:  spec.BasePath,
// 		Endpoints: []Endpoint{},
// 		Models:    make(map[string]Model),
// 	}

// 	// Process models from Definitions.
// 	for name, rawDef := range spec.Definitions {
// 		var schema Schema
// 		if err := json.Unmarshal(rawDef, &schema); err != nil {
// 			fmt.Printf("Error parsing definition %s: %v\n", name, err)
// 			continue
// 		}
// 		ir.Models[name] = Model{
// 			Name:   name,
// 			Schema: schema,
// 		}
// 	}

// 	// Process each path.
// 	for path, raw := range spec.Paths {
// 		// Unmarshal the raw JSON for each path into a generic map.
// 		var rawMap map[string]json.RawMessage
// 		if err := json.Unmarshal(raw, &rawMap); err != nil {
// 			fmt.Printf("Error unmarshalling path %q: %v\n", path, err)
// 			continue
// 		}

// 		// Extract global parameters (if any).
// 		var globalParams []Parameter
// 		if rawParams, ok := rawMap["parameters"]; ok {
// 			if err := json.Unmarshal(rawParams, &globalParams); err != nil {
// 				fmt.Printf("Error unmarshalling global parameters for path %q: %v\n", path, err)
// 			}
// 		}

// 		// Process each key that represents an HTTP method.
// 		for key, opRaw := range rawMap {
// 			if !validMethods[strings.ToLower(key)] {
// 				continue
// 			}

// 			var op Operation
// 			if err := json.Unmarshal(opRaw, &op); err != nil {
// 				fmt.Printf("Error unmarshalling operation for path %q method %q: %v\n", path, key, err)
// 				continue
// 			}

// 			// Merge global parameters with operation-level parameters.
// 			mergedParams := mergeParameters(globalParams, op.Parameters)
// 			// Generate OperationID if missing.
// 			if op.OperationID == "" {
// 				op.OperationID = generateOperationID(key, path)
// 			}

// 			endpoint := Endpoint{
// 				OperationID: op.OperationID,
// 				Method:      strings.ToLower(key),
// 				Path:        convertPath(path),
// 				Summary:     op.Summary,
// 				Description: op.Description,
// 				Tags:        op.Tags,
// 				Parameters:  convertToIRParameters(mergedParams),
// 				Responses:   convertToIRResponses(op.Responses, ir.Models),
// 			}

// 			ir.Endpoints = append(ir.Endpoints, endpoint)
// 		}
// 	}

// 	return ir
// }

// // --- Main ---

// func main() {
// 	if len(os.Args) < 2 {
// 		fmt.Println("Usage: go run ir_full_models_recursive.go <path-to-dereferenced-swagger.json>")
// 		os.Exit(1)
// 	}

// 	filename := os.Args[1]
// 	data, err := ioutil.ReadFile(filename)
// 	if err != nil {
// 		fmt.Printf("Error reading file: %v\n", err)
// 		os.Exit(1)
// 	}

// 	var spec SwaggerSpec
// 	err = json.Unmarshal(data, &spec)
// 	if err != nil {
// 		fmt.Printf("Error parsing JSON: %v\n", err)
// 		os.Exit(1)
// 	}

// 	ir := GenerateIR(spec)

// 	// For demonstration, print out each endpoint.
// 	for _, ep := range ir.Endpoints {
// 		fmt.Printf("Endpoint: %s %s (OperationID: %s)\n", strings.ToUpper(ep.Method), ep.Path, ep.OperationID)
// 		fmt.Printf("  Summary: %s\n", ep.Summary)
// 		fmt.Printf("  Description: %s\n", ep.Description)
// 		fmt.Printf("  Tags: %v\n", ep.Tags)
// 		fmt.Printf("  Parameters:\n")
// 		for _, p := range ep.Parameters {
// 			fmt.Printf("    - %q (%s) required: %t\n", p.Name, p.In, p.Required)
// 		}
// 		fmt.Printf("  Responses:\n")
// 		for code, r := range ep.Responses {
// 			fmt.Printf("    %s: %s, Schema: %+v\n", code, r.Description, r.Schema)
// 		}
// 		fmt.Println()
// 	}

// 	// Optionally, print the complete IR as JSON.
// 	irJSON, err := json.MarshalIndent(ir, "", "  ")
// 	if err == nil {
// 		fmt.Println("--- Full IR ---")
// 		fmt.Println(string(irJSON))
// 	}
// }
