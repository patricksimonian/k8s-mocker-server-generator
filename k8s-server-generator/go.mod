module github.com/patricksimonian/k8s-mock-server-generator/k8s-server-generator/v2

go 1.16

require (
	github.com/patricksimonian/k8s-mock-server-generator/openapi-ir-processor v0.1.0
	gopkg.in/yaml.v2 v2.4.0
)

// If the openapi-ir-processor is in the same repository but not yet published,
// you can use a replace directive to point to the local version
replace github.com/patricksimonian/k8s-mock-server-generator/openapi-ir-processor => ../openapi-ir-processor
