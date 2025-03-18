# Kubernetes Mock Server Generator

A tool that generates a TypeScript-based mock Kubernetes API server from an OpenAPI specification. This mock server can be used for testing Kubernetes clients without requiring a real Kubernetes cluster.

## Features

- **OpenAPI-based**: Generate a mock server from a Kubernetes OpenAPI specification
- **Multiple storage backends**: In-memory, file-based, or Firestore storage
- **Authentication support**: Token-based authentication
- **Configurable logging**: Console, Winston, or Firebase logging
- **Customizable initial state**: Start with default resources or your own custom resources
- **Watch support**: Simulates Kubernetes watch endpoints
- **Subresource support**: Status, scale, and other subresources

## Installation

### Prerequisites

- Go 1.16+
- Node.js 14+
- npm or yarn

### Building from Source

```bash
# Clone the repository
git clone https://github.com/patricksimonian/k8s-mock-server-generator.git
cd k8s-mock-server-generator

# Build the generator
go build -o k8s-mock-gen

# Generate a mock server
./k8s-mock-gen --config config.yaml --output ./generated-server
