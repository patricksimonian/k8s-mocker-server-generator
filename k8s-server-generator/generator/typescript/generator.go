package typescript

import (
	"fmt"
	"os"
	"path/filepath"
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

// loadTemplates loads all templates.
func (g *Generator) loadTemplates() error {
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
		"storage/StorageError.ts.tmpl",
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
		fullPath := filepath.Join("templates", path)

		// Parse template
		tmpl, err := template.ParseFiles(fullPath)
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
	// Create a template function map
	funcMap := template.FuncMap{
		"contains": func(slice []string, item string) bool {
			for _, s := range slice {
				if s == item {
					return true
				}
			}
			return false
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
	}

	// Generate model interfaces for each model in the IR
	for name, model := range g.IR.Models {
		// Create a new template with the function map
		tmpl, ok := g.Templates["models/model.ts.tmpl"]
		if !ok {
			return fmt.Errorf("template models/model.ts.tmpl not found")
		}

		// Create a new template with the function map
		tmplWithFuncs, err := tmpl.Clone()
		if err != nil {
			return fmt.Errorf("failed to clone template: %w", err)
		}
		tmplWithFuncs.Funcs(funcMap)

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

		if err := tmplWithFuncs.Execute(file, data); err != nil {
			return fmt.Errorf("failed to execute template for model %s: %w", name, err)
		}
	}

	// Generate models index
	// Create a new template with the function map
	indexTmpl, ok := g.Templates["models/index.ts.tmpl"]
	if !ok {
		return fmt.Errorf("template models/index.ts.tmpl not found")
	}

	indexTmplWithFuncs, err := indexTmpl.Clone()
	if err != nil {
		return fmt.Errorf("failed to clone template: %w", err)
	}
	indexTmplWithFuncs.Funcs(funcMap)

	indexPath := filepath.Join(g.OutputDir, "src", "models", "index.ts")
	indexFile, err := os.Create(indexPath)
	if err != nil {
		return fmt.Errorf("failed to create file %s: %w", indexPath, err)
	}
	defer indexFile.Close()

	if err := indexTmplWithFuncs.Execute(indexFile, g.IR); err != nil {
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
	// Create a template function map
	funcMap := template.FuncMap{
		"contains": func(slice []string, item string) bool {
			for _, s := range slice {
				if s == item {
					return true
				}
			}
			return false
		},
		"upper": strings.ToUpper,
		"lower": strings.ToLower,
		"first": func(slice []string) string {
			if len(slice) > 0 {
				return slice[0]
			}
			return ""
		},
	}

	// Group endpoints by tags
	taggedEndpoints := make(map[string][]ir.Endpoint)
	for _, endpoint := range g.IR.Endpoints {
		// Use the first tag as the resource name, or "default" if no tags
		resourceName := "default"
		if len(endpoint.Tags) > 0 {
			resourceName = endpoint.Tags[0]
		}
		taggedEndpoints[resourceName] = append(taggedEndpoints[resourceName], endpoint)
	}

	// Generate route files for each resource
	for resource, endpoints := range taggedEndpoints {
		// Create a new template with the function map
		tmpl, ok := g.Templates["routes/resource-routes.ts.tmpl"]
		if !ok {
			return fmt.Errorf("template routes/resource-routes.ts.tmpl not found")
		}

		// Create a new template with the function map
		tmplWithFuncs, err := tmpl.Clone()
		if err != nil {
			return fmt.Errorf("failed to clone template: %w", err)
		}
		tmplWithFuncs.Funcs(funcMap)

		data := struct {
			Resource  string
			Endpoints []ir.Endpoint
			IR        ir.IR
		}{
			Resource:  resource,
			Endpoints: endpoints,
			IR:        g.IR,
		}

		filename := fmt.Sprintf("%sRoutes.ts", resource)
		filePath := filepath.Join(g.OutputDir, "src", "routes", filename)

		file, err := os.Create(filePath)
		if err != nil {
			return fmt.Errorf("failed to create file %s: %w", filePath, err)
		}
		defer file.Close()

		if err := tmplWithFuncs.Execute(file, data); err != nil {
			return fmt.Errorf("failed to execute template for routes %s: %w", resource, err)
		}
	}

	// Generate routes index
	// Create a new template with the function map
	indexTmpl, ok := g.Templates["routes/index.ts.tmpl"]
	if !ok {
		return fmt.Errorf("template routes/index.ts.tmpl not found")
	}

	indexTmplWithFuncs, err := indexTmpl.Clone()
	if err != nil {
		return fmt.Errorf("failed to clone template: %w", err)
	}
	indexTmplWithFuncs.Funcs(funcMap)

	indexPath := filepath.Join(g.OutputDir, "src", "routes", "index.ts")
	indexFile, err := os.Create(indexPath)
	if err != nil {
		return fmt.Errorf("failed to create file %s: %w", indexPath, err)
	}
	defer indexFile.Close()

	if err := indexTmplWithFuncs.Execute(indexFile, g.IR); err != nil {
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

	// Add custom state path if applicable
	if g.Config.InitialStateConfig.Type == "custom" {
		tsConfig.CustomStatePath = g.Config.InitialStateConfig.Path
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
