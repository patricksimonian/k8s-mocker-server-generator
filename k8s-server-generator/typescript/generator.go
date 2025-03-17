package typescript

import (
	"fmt"
	"io/ioutil"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"text/template"

	"github.com/patricksimonian/k8s-mock-server-generator/k8s-server-generator/v2/generator/config"
	"github.com/patricksimonian/k8s-mock-server-generator/openapi-ir-processor/v2/ir"
)

// Generator handles the generation of TypeScript code from IR.
type Generator struct {
	IR        *ir.IR
	Config    *config.Config
	OutputDir string
	templates map[string]*template.Template
}

// NewGenerator creates a new Generator.
func NewGenerator(ir *ir.IR, config *config.Config, outputDir string) *Generator {
	return &Generator{
		IR:        ir,
		Config:    config,
		OutputDir: outputDir,
		templates: make(map[string]*template.Template),
	}
}

// Generate generates the TypeScript code.
func (g *Generator) Generate() error {
	// Load all templates
	if err := g.loadTemplates(); err != nil {
		return fmt.Errorf("failed to load templates: %w", err)
	}

	// Create output directory structure
	if err := g.createDirectoryStructure(); err != nil {
		return fmt.Errorf("failed to create directory structure: %w", err)
	}

	// Generate package.json
	if err := g.generatePackageJSON(); err != nil {
		return fmt.Errorf("failed to generate package.json: %w", err)
	}

	// Generate tsconfig.json
	if err := g.generateTSConfig(); err != nil {
		return fmt.Errorf("failed to generate tsconfig.json: %w", err)
	}

	// Generate config.ts
	if err := g.generateConfig(); err != nil {
		return fmt.Errorf("failed to generate config.ts: %w", err)
	}

	// Generate logger.ts
	if err := g.generateLogger(); err != nil {
		return fmt.Errorf("failed to generate logger.ts: %w", err)
	}

	// Generate storage interfaces and implementations
	if err := g.generateStorage(); err != nil {
		return fmt.Errorf("failed to generate storage: %w", err)
	}

	// Generate models
	if err := g.generateModels(); err != nil {
		return fmt.Errorf("failed to generate models: %w", err)
	}

	// Generate routes
	if err := g.generateRoutes(); err != nil {
		return fmt.Errorf("failed to generate routes: %w", err)
	}

	// Generate middleware
	if err := g.generateMiddleware(); err != nil {
		return fmt.Errorf("failed to generate middleware: %w", err)
	}

	// Generate server
	if err := g.generateServer(); err != nil {
		return fmt.Errorf("failed to generate server: %w", err)
	}

	// Generate default cluster state
	if err := g.generateDefaultClusterState(); err != nil {
		return fmt.Errorf("failed to generate default cluster state: %w", err)
	}

	// Generate initialization script
	if err := g.generateInitScript(); err != nil {
		return fmt.Errorf("failed to generate initialization script: %w", err)
	}

	// Generate index.ts
	if err := g.generateIndex(); err != nil {
		return fmt.Errorf("failed to generate index.ts: %w", err)
	}

	return nil
}

// loadTemplates loads all template files from the templates directory.
func (g *Generator) loadTemplates() error {
	// Get the directory of the current file
	_, filename, _, ok := runtime.Caller(0)
	if !ok {
		return fmt.Errorf("failed to get current file path")
	}

	templatesDir := filepath.Join(filepath.Dir(filename), "templates")

	// Walk through the templates directory
	return filepath.Walk(templatesDir, func(path string, info os.FileInfo, err error) error {
		if err != nil {
			return err
		}

		// Skip directories
		if info.IsDir() {
			return nil
		}

		// Skip non-template files
		if !strings.HasSuffix(path, ".tmpl") {
			return nil
		}

		// Read template file
		content, err := ioutil.ReadFile(path)
		if err != nil {
			return fmt.Errorf("failed to read template file %s: %w", path, err)
		}

		// Get relative path from templates directory
		relPath, err := filepath.Rel(templatesDir, path)
		if err != nil {
			return fmt.Errorf("failed to get relative path for template %s: %w", path, err)
		}

		// Create template
		tmpl, err := template.New(relPath).Parse(string(content))
		if err != nil {
			return fmt.Errorf("failed to parse template %s: %w", relPath, err)
		}

		// Store template
		g.templates[relPath] = tmpl

		return nil
	})
}

// createDirectoryStructure creates the output directory structure.
func (g *Generator) createDirectoryStructure() error {
	dirs := []string{
		g.OutputDir,
		filepath.Join(g.OutputDir, "src"),
		filepath.Join(g.OutputDir, "src", "models"),
		filepath.Join(g.OutputDir, "src", "routes"),
		filepath.Join(g.OutputDir, "src", "storage"),
		filepath.Join(g.OutputDir, "src", "middleware"),
	}

	for _, dir := range dirs {
		if err := os.MkdirAll(dir, 0755); err != nil {
			return fmt.Errorf("failed to create directory %s: %w", dir, err)
		}
	}

	return nil
}

// executeTemplate executes a template and writes the result to a file.
func (g *Generator) executeTemplate(templateName, outputPath string, data interface{}) error {
	tmpl, ok := g.templates[templateName]
	if !ok {
		return fmt.Errorf("template %s not found", templateName)
	}

	file, err := os.Create(outputPath)
	if err != nil {
		return fmt.Errorf("failed to create file %s: %w", outputPath, err)
	}
	defer file.Close()

	if err := tmpl.Execute(file, data); err != nil {
		return fmt.Errorf("failed to execute template %s: %w", templateName, err)
	}

	return nil
}

// generatePackageJSON generates the package.json file.
func (g *Generator) generatePackageJSON() error {
	// Execute template with the storage type
	return g.executeTemplate("package.json.tmpl", filepath.Join(g.OutputDir, "package.json"), struct {
		StorageType string
	}{
		StorageType: g.Config.Storage.Type,
	})
}

// generateTSConfig generates the tsconfig.json file.
func (g *Generator) generateTSConfig() error {
	return g.executeTemplate("tsconfig.json.tmpl", filepath.Join(g.OutputDir, "tsconfig.json"), nil)
}

// generateConfig generates the config.ts file.
func (g *Generator) generateConfig() error {
	// Create simplified config for TypeScript
	tsConfig := struct {
		Port              int    `json:"port"`
		StorageType       string `json:"storageType"`
		FilePath          string `json:"filePath,omitempty"`
		FirestoreProject  string `json:"firestoreProject,omitempty"`
		FirestoreEmulator bool   `json:"firestoreEmulator,omitempty"`
		InitialStateType  string `json:"initialStateType"`
	}{
		Port:             g.Config.Server.Port,
		StorageType:      g.Config.Storage.Type,
		InitialStateType: g.Config.InitialStateConfig.Type,
	}

	// Add storage-specific config
	if g.Config.Storage.Type == "file" {
		tsConfig.FilePath = g.Config.Storage.FilePath
	} else if g.Config.Storage.Type == "firestore" {
		tsConfig.FirestoreProject = g.Config.Storage.FirestoreProject
		tsConfig.FirestoreEmulator = g.Config.Storage.FirestoreEmulator
	}

	// Execute template
	return g.executeTemplate("config.ts.tmpl", filepath.Join(g.OutputDir, "src", "config.ts"), tsConfig)
}

// generateLogger generates the logger.ts file.
func (g *Generator) generateLogger() error {
	return g.executeTemplate("logger.ts.tmpl", filepath.Join(g.OutputDir, "src", "logger.ts"), nil)
}

// generateStorage generates the storage interfaces and implementations.
func (g *Generator) generateStorage() error {
	// Generate Storage interface (always needed)
	if err := g.executeTemplate("storage/Storage.ts.tmpl", filepath.Join(g.OutputDir, "src", "storage", "Storage.ts"), g.IR); err != nil {
		return err
	}

	// Generate StorageError (always needed)
	if err := g.executeTemplate("storage/StorageError.ts.tmpl", filepath.Join(g.OutputDir, "src", "storage", "StorageError.ts"), nil); err != nil {
		return err
	}

	// Generate storage implementations based on configuration
	switch g.Config.Storage.Type {
	case "memory":
		if err := g.executeTemplate("storage/InMemoryStorage.ts.tmpl", filepath.Join(g.OutputDir, "src", "storage", "InMemoryStorage.ts"), g.IR); err != nil {
			return err
		}
	case "file":
		if err := g.executeTemplate("storage/FileStorage.ts.tmpl", filepath.Join(g.OutputDir, "src", "storage", "FileStorage.ts"), g.IR); err != nil {
			return err
		}
	case "firestore":
		if err := g.executeTemplate("storage/FirestoreStorage.ts.tmpl", filepath.Join(g.OutputDir, "src", "storage", "FirestoreStorage.ts"), g.IR); err != nil {
			return err
		}
	}

	// Generate storage index
	return g.executeTemplate("storage/index.ts.tmpl", filepath.Join(g.OutputDir, "src", "storage", "index.ts"), g.Config)
}

// generateModels generates the model files.
func (g *Generator) generateModels() error {
	// Generate model interfaces
	for _, definition := range g.IR.Definitions {
		data := struct {
			Definition *ir.Definition
			IR         *ir.IR
		}{
			Definition: definition,
			IR:         g.IR,
		}

		filename := fmt.Sprintf("%s.ts", definition.Name)
		if err := g.executeTemplate("models/model.ts.tmpl", filepath.Join(g.OutputDir, "src", "models", filename), data); err != nil {
			return err
		}
	}

	// Generate models index
	return g.executeTemplate("models/index.ts.tmpl", filepath.Join(g.OutputDir, "src", "models", "index.ts"), g.IR)
}

// generateRoutes generates the route files.
func (g *Generator) generateRoutes() error {
	// Group paths by resource
	resourcePaths := make(map[string][]*ir.Path)
	for _, path := range g.IR.Paths {
		resource := path.Resource
		resourcePaths[resource] = append(resourcePaths[resource], path)
	}

	// Generate route files for each resource
	for resource, paths := range resourcePaths {
		data := struct {
			Resource string
			Paths    []*ir.Path
			IR       *ir.IR
		}{
			Resource: resource,
			Paths:    paths,
			IR:       g.IR,
		}

		filename := fmt.Sprintf("%sRoutes.ts", resource)
		if err := g.executeTemplate("routes/resource-routes.ts.tmpl", filepath.Join(g.OutputDir, "src", "routes", filename), data); err != nil {
			return err
		}
	}

	// Generate routes index
	return g.executeTemplate("routes/index.ts.tmpl", filepath.Join(g.OutputDir, "src", "routes", "index.ts"), g.IR)
}

// generateMiddleware generates the middleware files.
func (g *Generator) generateMiddleware() error {
	// Generate authentication middleware
	if err := g.executeTemplate("middleware/auth.ts.tmpl", filepath.Join(g.OutputDir, "src", "middleware", "auth.ts"), nil); err != nil {
		return err
	}

	// Generate error handling middleware
	if err := g.executeTemplate("middleware/errorHandler.ts.tmpl", filepath.Join(g.OutputDir, "src", "middleware", "errorHandler.ts"), nil); err != nil {
		return err
	}

	// Generate middleware index
	return g.executeTemplate("middleware/index.ts.tmpl", filepath.Join(g.OutputDir, "src", "middleware", "index.ts"), nil)
}

// generateServer generates the server.ts file.
func (g *Generator) generateServer() error {
	return g.executeTemplate("server.ts.tmpl", filepath.Join(g.OutputDir, "src", "server.ts"), g.IR)
}

// generateDefaultClusterState generates the default cluster state file.
func (g *Generator) generateDefaultClusterState() error {
	return g.executeTemplate("default-cluster-state.json.tmpl", filepath.Join(g.OutputDir, "src", "default-cluster-state.json"), g.IR)
}

// generateInitScript generates the initialization script.
func (g *Generator) generateInitScript() error {
	return g.executeTemplate("initCluster.ts.tmpl", filepath.Join(g.OutputDir, "src", "initCluster.ts"), g.IR)
}

// generateIndex generates the index.ts file.
func (g *Generator) generateIndex() error {
	return g.executeTemplate("index.ts.tmpl", filepath.Join(g.OutputDir, "src", "index.ts"), nil)
}
