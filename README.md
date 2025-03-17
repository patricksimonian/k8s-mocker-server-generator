# K8S Mock Server Generator

This project contains tooling to generate a Express.JS/Typescript mock api server for K8s. 

## Projects

- cluster-runbooks: These are a series of shell scripts that fetch complete open api specs from target k8s clusters. Currently there is only a script to get a spec from a KiND cluster
- dereferencer: a python project that generates a fully de-referenced open api spec from what you would receive from a k8s cluster
- openapi-ir-processor: a go package that generates an IR that is used by the k8s-server-generator
- k8s-server-generator: a go package/cli that will generate a typescript mock k8s server
