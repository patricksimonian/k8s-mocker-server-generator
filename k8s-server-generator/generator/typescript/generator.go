package typescript

import (
	"fmt"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"text/template"

	"github.com/patricksimonian/k8s-mock-server-generator/k8s-server-generator/generator/config"
	"github.com/patricksimonian/k8s-mock-server-generator/openapi-ir-processor/ir"
)

// Generator is the TypeScript code generator.
type Generator struct {
	IR        ir.IR
	Config    *config.Config
	OutputDir string
	Templates map[string]*template.Template
}

// NewGenerator creates a new TypeScript generator.
func NewGenerator(irData ir.IR, cfg *config.Config, outputDir string) (*Generator, error) {
	// Create generator
	g := &Generator{
		IR:        irData,
		Config:    cfg,
		OutputDir: outputDir,
		Templates: make(map[string]*template.Template),
	}

	// Load templates
	if err := g.loadTemplates(); err != nil {
		return nil, fmt.Errorf("failed to load templates: %w", err)
	}

	return g, nil
}

// getTemplatesDir returns the absolute path to the templates directory.
func getTemplatesDir() (string, error) {
	// Get the directory of the current file (generator.go)
	_, filename, _, ok := runtime.Caller(0)
	if !ok {
		return "", fmt.Errorf("failed to get current file path")
	}

	// The templates directory is in the same directory as this file
	return filepath.Join(filepath.Dir(filename), "templates"), nil
}

// createTemplateFuncMap creates a template function map with all the functions needed by the templates.
func (g *Generator) createTemplateFuncMap() template.FuncMap {
	return template.FuncMap{
		"contains": func(slice []string, item string) bool {
			for _, s := range slice {
				if s == item {
					return true
				}
			}
			return false
		},
		"toString": func(v interface{}) string {
			return fmt.Sprintf("%v", v)
		},
		"add": func(a, b int) int {
			return a + b
		},
		"sanitizePath": func(path string) string {
			sanitized := strings.ReplaceAll(strings.ReplaceAll(path, "/", "-"), ":", "_")
			sanitized = strings.ReplaceAll(sanitized, "{", "")
			sanitized = strings.ReplaceAll(sanitized, "}", "")
			if sanitized == "" || sanitized == "-" {
				sanitized = "root"
			}
			return sanitized
		},
		"getTypeScriptType": func(schema ir.Schema) string {
			switch schema.Type {
			case "string":
				return "string"
			case "integer", "number":
				return "number"
			case "boolean":
				return "boolean"
			case "array":
				if schema.Items != nil {
					return "Array<" + getTypeScriptType(*schema.Items) + ">"
				}
				return "any[]"
			case "object":
				if len(schema.Properties) > 0 {
					return "{ [key: string]: any }"
				}
				return "Record<string, any>"
			default:
				if schema.Ref != "" {
					parts := strings.Split(schema.Ref, "/")
					return parts[len(parts)-1]
				}
				return "any"
			}
		},
		"getDefaultValue": func(schema ir.Schema) string {
			switch schema.Type {
			case "string":
				return "''"
			case "integer", "number":
				return "0"
			case "boolean":
				return "false"
			case "array":
				return "[]"
			case "object":
				return "{}"
			default:
				return "undefined"
			}
		},
		"upper": strings.ToUpper,
		"lower": strings.ToLower,
		"title": strings.Title,
		"first": func(slice []string) string {
			if len(slice) > 0 {
				return slice[0]
			}
			return ""
		},
		"hasSubstring": func(s, substr string) bool {
			return strings.Contains(s, substr)
		},
		"split": strings.Split,
		"hasKey": func(dict map[string]interface{}, key string) bool {
			_, ok := dict[key]
			return ok
		},
		"set": func(dict map[string]interface{}, key string, value interface{}) map[string]interface{} {
			dict[key] = value
			return dict
		},
		"get": func(dict map[string]interface{}, key string) interface{} {
			return dict[key]
		},
		"dict": func() map[string]interface{} {
			return make(map[string]interface{})
		},
		"list": func(items ...interface{}) []interface{} {
			return items
		},
		"append": func(slice []interface{}, item interface{}) []interface{} {
			return append(slice, item)
		},
	}
}

// loadTemplates loads all templates.
func (g *Generator) loadTemplates() error {
	// Get the templates directory
	templatesDir, err := getTemplatesDir()
	if err != nil {
		return fmt.Errorf("failed to get templates directory: %w", err)
	}

	// Create template function map
	funcMap := g.createTemplateFuncMap()

	// Define template paths
	templatePaths := []string{
		"config.ts.tmpl",
		"index.ts.tmpl",
		"logger.ts.tmpl",
		"server.ts.tmpl",
		"models/model.ts.tmpl",
		"models/index.ts.tmpl",
		"routes/resource-routes.ts.tmpl",
		"routes/index.ts.tmpl",
		"storage/Storage.ts.tmpl",
		"storage/InMemoryStorage.ts.tmpl",
		"storage/FileStorage.ts.tmpl",
		"storage/FirestoreStorage.ts.tmpl",
		"storage/index.ts.tmpl",
		"middleware/auth.ts.tmpl",
		"middleware/error-handler.ts.tmpl",
		"middleware/index.ts.tmpl",
		"utils/index.ts.tmpl",
		"default-cluster-state.json.tmpl",
		"init-cluster.ts.tmpl",
		"package.json.tmpl",
		"tsconfig.json.tmpl",
	}

	// Load each template
	for _, path := range templatePaths {
		// Construct full path
		fullPath := filepath.Join(templatesDir, path)

		// Ensure the directory exists
		dir := filepath.Dir(fullPath)
		if _, err := os.Stat(dir); os.IsNotExist(err) {
			return fmt.Errorf("template directory not found: %s", dir)
		}

		// Check if template file exists
		if _, err := os.Stat(fullPath); os.IsNotExist(err) {
			return fmt.Errorf("template file not found: %s", fullPath)
		}

		// Create a new template with the function map
		tmpl := template.New(filepath.Base(path)).Funcs(funcMap)

		// Parse template
		tmpl, err := tmpl.ParseFiles(fullPath)
		if err != nil {
			return fmt.Errorf("failed to parse template %s: %w", path, err)
		}

		// Store template
		g.Templates[path] = tmpl
	}

	return nil
}

// Generate generates all TypeScript code.
func (g *Generator) Generate() error {
	// Create directory structure
	if err := g.createDirectoryStructure(); err != nil {
		return fmt.Errorf("failed to create directory structure: %w", err)
	}

	// Generate config
	if err := g.generateConfig(); err != nil {
		return fmt.Errorf("failed to generate config: %w", err)
	}

	// Generate logger
	if err := g.generateLogger(); err != nil {
		return fmt.Errorf("failed to generate logger: %w", err)
	}

	// Generate models
	if err := g.generateModels(); err != nil {
		return fmt.Errorf("failed to generate models: %w", err)
	}

	// Generate storage
	if err := g.generateStorage(); err != nil {
		return fmt.Errorf("failed to generate storage: %w", err)
	}

	// Generate routes
	if err := g.generateRoutes(); err != nil {
		return fmt.Errorf("failed to generate routes: %w", err)
	}

	// Generate middleware
	if err := g.generateMiddleware(); err != nil {
		return fmt.Errorf("failed to generate middleware: %w", err)
	}

	// Generate utils
	if err := g.generateUtils(); err != nil {
		return fmt.Errorf("failed to generate utils: %w", err)
	}

	// Generate default cluster state
	if err := g.generateDefaultClusterState(); err != nil {
		return fmt.Errorf("failed to generate default cluster state: %w", err)
	}

	// Generate init cluster script
	if err := g.generateInitCluster(); err != nil {
		return fmt.Errorf("failed to generate init cluster script: %w", err)
	}

	// Generate server
	if err := g.generateServer(); err != nil {
		return fmt.Errorf("failed to generate server: %w", err)
	}

	// Generate index
	if err := g.generateIndex(); err != nil {
		return fmt.Errorf("failed to generate index: %w", err)
	}

	// Generate package.json
	if err := g.generatePackageJSON(); err != nil {
		return fmt.Errorf("failed to generate package.json: %w", err)
	}

	// Generate tsconfig.json
	if err := g.generateTSConfig(); err != nil {
		return fmt.Errorf("failed to generate tsconfig.json: %w", err)
	}

	return nil
}

// createDirectoryStructure creates the directory structure for the generated code.
func (g *Generator) createDirectoryStructure() error {
	// Create directories
	dirs := []string{
		"src",
		"src/models",
		"src/routes",
		"src/storage",
		"src/middleware",
		"src/utils",
	}

	for _, dir := range dirs {
		path := filepath.Join(g.OutputDir, dir)
		if err := os.MkdirAll(path, 0755); err != nil {
			return fmt.Errorf("failed to create directory %s: %w", path, err)
		}
	}

	return nil
}

// generateModels generates the model files.
func (g *Generator) generateModels() error {
	// Generate model interfaces for each model in the IR
	for name, model := range g.IR.Models {
		// Get the template
		tmpl, ok := g.Templates["models/model.ts.tmpl"]
		if !ok {
			return fmt.Errorf("template models/model.ts.tmpl not found")
		}

		data := struct {
			ModelName string
			Model     ir.Model
			IR        ir.IR
		}{
			ModelName: name,
			Model:     model,
			IR:        g.IR,
		}

		filename := fmt.Sprintf("%s.ts", name)
		filePath := filepath.Join(g.OutputDir, "src", "models", filename)

		file, err := os.Create(filePath)
		if err != nil {
			return fmt.Errorf("failed to create file %s: %w", filePath, err)
		}
		defer file.Close()

		if err := tmpl.Execute(file, data); err != nil {
			return fmt.Errorf("failed to execute template for model %s: %w", name, err)
		}
	}

	// Generate models index
	indexTmpl, ok := g.Templates["models/index.ts.tmpl"]
	if !ok {
		return fmt.Errorf("template models/index.ts.tmpl not found")
	}

	indexPath := filepath.Join(g.OutputDir, "src", "models", "index.ts")
	indexFile, err := os.Create(indexPath)
	if err != nil {
		return fmt.Errorf("failed to create file %s: %w", indexPath, err)
	}
	defer indexFile.Close()

	if err := indexTmpl.Execute(indexFile, g.IR); err != nil {
		return fmt.Errorf("failed to execute template for models index: %w", err)
	}

	return nil
}

// Helper function for getTypeScriptType
func getTypeScriptType(schema ir.Schema) string {
	switch schema.Type {
	case "string":
		return "string"
	case "integer", "number":
		return "number"
	case "boolean":
		return "boolean"
	case "array":
		if schema.Items != nil {
			return "Array<" + getTypeScriptType(*schema.Items) + ">"
		}
		return "any[]"
	case "object":
		if len(schema.Properties) > 0 {
			return "{ [key: string]: any }"
		}
		return "Record<string, any>"
	default:
		if schema.Ref != "" {
			parts := strings.Split(schema.Ref, "/")
			return parts[len(parts)-1]
		}
		return "any"
	}
}

// generateRoutes generates the route files.
func (g *Generator) generateRoutes() error {
	// Create a single routes file with all endpoints
	routesFilePath := filepath.Join(g.OutputDir, "src", "routes", "api-routes.ts")
	file, err := os.Create(routesFilePath)
	if err != nil {
		return fmt.Errorf("failed to create file %s: %w", routesFilePath, err)
	}
	defer file.Close()

	// Get the template
	tmpl, ok := g.Templates["routes/resource-routes.ts.tmpl"]
	if !ok {
		return fmt.Errorf("template routes/resource-routes.ts.tmpl not found")
	}

	// Execute template with all endpoints
	data := struct {
		Resource  string
		Endpoints []ir.Endpoint
		IR        ir.IR
	}{
		Resource:  "API", // Generic name since we're not grouping
		Endpoints: g.IR.Endpoints,
		IR:        g.IR,
	}

	if err := tmpl.Execute(file, data); err != nil {
		return fmt.Errorf("failed to execute template for routes: %w", err)
	}

	// Generate routes index that imports and uses the single routes file
	indexTmpl, ok := g.Templates["routes/index.ts.tmpl"]
	if !ok {
		return fmt.Errorf("template routes/index.ts.tmpl not found")
	}

	indexPath := filepath.Join(g.OutputDir, "src", "routes", "index.ts")
	indexFile, err := os.Create(indexPath)
	if err != nil {
		return fmt.Errorf("failed to create file %s: %w", indexPath, err)
	}
	defer indexFile.Close()

	// Create a data structure for the index template that includes SingleRouteFile
	indexData := struct {
		SingleRouteFile bool
		Models          map[string]ir.Model
	}{
		SingleRouteFile: true,
		Models:          g.IR.Models,
	}

	if err := indexTmpl.Execute(indexFile, indexData); err != nil {
		return fmt.Errorf("failed to execute template for routes index: %w", err)
	}

	return nil
}

// generateConfig generates the config.ts file.
func (g *Generator) generateConfig() error {
	// Create simplified config for TypeScript
	tsConfig := struct {
		StorageType               string `json:"storageType"`
		FilePath                  string `json:"filePath,omitempty"`
		FirestoreProject          string `json:"firestoreProject,omitempty"`
		FirestoreCollectionPrefix string `json:"firestoreCollectionPrefix,omitempty"`
		InitialStateType          string `json:"initialStateType"`
		CustomStatePath           string `json:"customStatePath,omitempty"`
	}{
		StorageType:      g.Config.Storage.Type,
		InitialStateType: g.Config.InitialStateConfig.Type,
	}

	// Add storage-specific config
	if g.Config.Storage.Type == "file" {
		tsConfig.FilePath = g.Config.Storage.FilePath
	} else if g.Config.Storage.Type == "firestore" {
		tsConfig.FirestoreProject = g.Config.Storage.FirestoreProject
		tsConfig.FirestoreCollectionPrefix = g.Config.Storage.FirestoreCollectionPrefix
		if tsConfig.FirestoreCollectionPrefix == "" {
			tsConfig.FirestoreCollectionPrefix = "k8s" // Default collection prefix
		}
	}

	// Execute template
	return g.executeTemplate("config.ts.tmpl", filepath.Join(g.OutputDir, "src", "config.ts"), tsConfig)
}

// generateLogger generates the logger.ts file.
func (g *Generator) generateLogger() error {
	// Execute template
	return g.executeTemplate("logger.ts.tmpl", filepath.Join(g.OutputDir, "src", "logger.ts"), nil)
}

// generateStorage generates the storage files.
func (g *Generator) generateStorage() error {
	// Generate Storage interface
	if err := g.executeTemplate("storage/Storage.ts.tmpl", filepath.Join(g.OutputDir, "src", "storage", "Storage.ts"), g.IR); err != nil {
		return fmt.Errorf("failed to generate Storage interface: %w", err)
	}

	// Generate StorageError
	storageErrorHandler := NewStorageErrorHandler(g.OutputDir)
	if err := storageErrorHandler.Generate(); err != nil {
		return fmt.Errorf("failed to generate StorageError: %w", err)
	}

	// Generate storage implementations based on config
	switch g.Config.Storage.Type {
	case "memory":
		// Generate InMemoryStorage
		if err := g.executeTemplate("storage/InMemoryStorage.ts.tmpl", filepath.Join(g.OutputDir, "src", "storage", "InMemoryStorage.ts"), g.IR); err != nil {
			return fmt.Errorf("failed to generate InMemoryStorage: %w", err)
		}
	case "file":
		// Generate FileStorage
		if err := g.executeTemplate("storage/FileStorage.ts.tmpl", filepath.Join(g.OutputDir, "src", "storage", "FileStorage.ts"), g.IR); err != nil {
			return fmt.Errorf("failed to generate FileStorage: %w", err)
		}
	case "firestore":
		// Generate FirestoreStorage
		if err := g.executeTemplate("storage/FirestoreStorage.ts.tmpl", filepath.Join(g.OutputDir, "src", "storage", "FirestoreStorage.ts"), g.IR); err != nil {
			return fmt.Errorf("failed to generate FirestoreStorage: %w", err)
		}
	}

	// Generate storage index
	return g.executeTemplate("storage/index.ts.tmpl", filepath.Join(g.OutputDir, "src", "storage", "index.ts"), g.Config)
}

// generateMiddleware generates the middleware files.
func (g *Generator) generateMiddleware() error {
	// Generate auth middleware
	if err := g.executeTemplate("middleware/auth.ts.tmpl", filepath.Join(g.OutputDir, "src", "middleware", "auth.ts"), nil); err != nil {
		return fmt.Errorf("failed to generate auth middleware: %w", err)
	}

	// Generate error handler middleware
	if err := g.executeTemplate("middleware/error-handler.ts.tmpl", filepath.Join(g.OutputDir, "src", "middleware", "error-handler.ts"), nil); err != nil {
		return fmt.Errorf("failed to generate error handler middleware: %w", err)
	}

	// Generate middleware index
	return g.executeTemplate("middleware/index.ts.tmpl", filepath.Join(g.OutputDir, "src", "middleware", "index.ts"), nil)
}

// generateUtils generates the utils files.
func (g *Generator) generateUtils() error {
	// Generate utils index
	return g.executeTemplate("utils/index.ts.tmpl", filepath.Join(g.OutputDir, "src", "utils", "index.ts"), nil)
}

// generateDefaultClusterState generates the default cluster state JSON file.
func (g *Generator) generateDefaultClusterState() error {
	// Only generate if using default initial state
	if g.Config.InitialStateConfig.Type != "default" {
		return nil
	}

	// Execute template
	return g.executeTemplate("default-cluster-state.json.tmpl", filepath.Join(g.OutputDir, "default-cluster-state.json"), g.IR)
}

// generateInitCluster generates the init-cluster.ts file.
func (g *Generator) generateInitCluster() error {
	// Execute template
	return g.executeTemplate("init-cluster.ts.tmpl", filepath.Join(g.OutputDir, "src", "init-cluster.ts"), g.Config)
}

// generateServer generates the server.ts file.
func (g *Generator) generateServer() error {
	// Execute template
	return g.executeTemplate("server.ts.tmpl", filepath.Join(g.OutputDir, "src", "server.ts"), g.Config)
}

// generateIndex generates the index.ts file.
func (g *Generator) generateIndex() error {
	// Execute template
	return g.executeTemplate("index.ts.tmpl", filepath.Join(g.OutputDir, "src", "index.ts"), g.Config)
}

// generatePackageJSON generates the package.json file.
func (g *Generator) generatePackageJSON() error {
	// Execute template
	return g.executeTemplate("package.json.tmpl", filepath.Join(g.OutputDir, "package.json"), g.Config)
}

// generateTSConfig generates the tsconfig.json file.
func (g *Generator) generateTSConfig() error {
	// Execute template
	return g.executeTemplate("tsconfig.json.tmpl", filepath.Join(g.OutputDir, "tsconfig.json"), nil)
}

// executeTemplate executes a template with the given data and writes the result to the given file.
func (g *Generator) executeTemplate(templateName string, outputPath string, data interface{}) error {
	// Get template
	tmpl, ok := g.Templates[templateName]
	if !ok {
		return fmt.Errorf("template %s not found", templateName)
	}

	// Create output directory if it doesn't exist
	dir := filepath.Dir(outputPath)
	if err := os.MkdirAll(dir, 0755); err != nil {
		return fmt.Errorf("failed to create directory %s: %w", dir, err)
	}

	// Create output file
	file, err := os.Create(outputPath)
	if err != nil {
		return fmt.Errorf("failed to create file %s: %w", outputPath, err)
	}
	defer file.Close()

	// Execute template
	if err := tmpl.Execute(file, data); err != nil {
		return fmt.Errorf("failed to execute template %s: %w", templateName, err)
	}

	return nil
}
