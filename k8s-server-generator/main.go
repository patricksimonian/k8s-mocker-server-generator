package main

import (
	"fmt"
	"io/ioutil"
	"log"
	"os"

	"github.com/patricksimonian/k8s-mock-server-generator/k8s-server-generator/generator/config"
	"github.com/patricksimonian/k8s-mock-server-generator/k8s-server-generator/generator/typescript"
	"github.com/patricksimonian/k8s-mock-server-generator/openapi-ir-processor/ir"
	"gopkg.in/yaml.v2"
)

func main() {
	// Check if config file path is provided
	if len(os.Args) < 2 {
		log.Fatal("Usage: k8s-mock-server-generator <config-file>")
	}

	configPath := os.Args[1]

	// Read and parse config file
	configData, err := ioutil.ReadFile(configPath)
	if err != nil {
		log.Fatalf("Failed to read config file: %v", err)
	}

	var cfg config.Config
	if err := yaml.Unmarshal(configData, &cfg); err != nil {
		log.Fatalf("Failed to parse config file: %v", err)
	}

	// Validate config
	if err := validateConfig(&cfg); err != nil {
		log.Fatalf("Invalid configuration: %v", err)
	}

	// Read OpenAPI spec file
	specData, err := ioutil.ReadFile(cfg.OpenAPISpecPath)
	if err != nil {
		log.Fatalf("Failed to read OpenAPI spec file: %v", err)
	}

	// Parse spec into SwaggerSpec structure
	var spec ir.SwaggerSpec
	if err := yaml.Unmarshal(specData, &spec); err != nil {
		log.Fatalf("Failed to parse OpenAPI spec: %v", err)
	}

	// Generate IR from the spec
	irData := ir.GenerateIR(spec)

	// Create output directory if it doesn't exist
	if err := os.MkdirAll(cfg.OutputDir, 0755); err != nil {
		log.Fatalf("Failed to create output directory: %v", err)
	}

	// Generate TypeScript code
	generator, err := typescript.NewGenerator(irData, &cfg, cfg.OutputDir)
	if err != nil {
		log.Fatalf("Failed to create generator: %v", err)
	}

	if err := generator.Generate(); err != nil {
		log.Fatalf("Failed to generate TypeScript code: %v", err)
	}

	fmt.Printf("Successfully generated Kubernetes mock server at %s\n", cfg.OutputDir)
}

// validateConfig validates the configuration
func validateConfig(cfg *config.Config) error {
	// Check if OpenAPI spec path is provided
	if cfg.OpenAPISpecPath == "" {
		return fmt.Errorf("OpenAPISpecPath is required")
	}

	// Check if output directory is provided
	if cfg.OutputDir == "" {
		return fmt.Errorf("OutputDir is required")
	}

	// Set default values if not provided
	if cfg.Server.Port == 0 {
		cfg.Server.Port = 8080
	}

	// Validate storage configuration
	switch cfg.Storage.Type {
	case "memory":
		// No additional validation needed
	case "file":
		if cfg.Storage.FilePath == "" {
			return fmt.Errorf("FilePath is required for file storage")
		}
	case "firestore":
		if cfg.Storage.FirestoreProject == "" {
			return fmt.Errorf("FirestoreProject is required for Firestore storage")
		}
	default:
		return fmt.Errorf("unsupported storage type: %s", cfg.Storage.Type)
	}

	// Validate initial state configuration
	switch cfg.InitialStateConfig.Type {
	case "empty":
		// No additional validation needed
	case "default":
		// No additional validation needed
	case "custom":
		if cfg.InitialStateConfig.Path == "" {
			return fmt.Errorf("Path is required for custom initial state")
		}
	default:
		return fmt.Errorf("unsupported initial state type: %s", cfg.InitialStateConfig.Type)
	}

	return nil
}
