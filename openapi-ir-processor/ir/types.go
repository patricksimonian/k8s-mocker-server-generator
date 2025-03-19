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

type Response struct {
	Description string  `json:"description"`
	Schema      *Schema `json:"schema"`
}

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

type Operation struct {
	OperationID string              `json:"operationId"`
	Summary     string              `json:"summary"`
	Description string              `json:"description"`
	Parameters  []Parameter         `json:"parameters"`
	Responses   map[string]Response `json:"responses"`
	Tags        []string            `json:"tags"`
}

type SwaggerSpec struct {
	Swagger     string                     `json:"swagger"`
	Info        map[string]interface{}     `json:"info"`
	BasePath    string                     `json:"basePath"`
	Paths       map[string]json.RawMessage `json:"paths"`
	Definitions map[string]json.RawMessage `json:"definitions"`
}

// --- IR Structures ---

type IR struct {
	Title     string
	Version   string
	BasePath  string
	Endpoints []Endpoint
	Models    map[string]Model
}

type Endpoint struct {
	OperationID  string
	Method       string // e.g., "get", "post"
	Path         string // Express-style path (e.g., "/api/v1/pods/:id")
	Summary      string
	Description  string
	Tags         []string
	ResourceType string // New: resource type derived from the path
	Parameters   []IRParameter
	Namespaced   bool
	Responses    map[string]IRResponse
}

type IRParameter struct {
	Name        string
	In          string
	Required    bool
	Type        string
	Description string
	Schema      *Schema
}

type IRResponse struct {
	StatusCode  string
	Description string
	Schema      *Schema
}

type Model struct {
	Name         string
	Schema       Schema
	ResourceType string // New: resource type derived from the model name
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
