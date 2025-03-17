package ir

import "encoding/json"

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
var ValidMethods = map[string]bool{
	"get":     true,
	"post":    true,
	"put":     true,
	"delete":  true,
	"patch":   true,
	"options": true,
	"head":    true,
}
