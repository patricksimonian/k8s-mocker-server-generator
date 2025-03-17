#!/usr/bin/env python3
"""
Extract endpoints for basic Kubernetes objects from an OpenAPI/Swagger spec.

This script reads an input OpenAPI spec (JSON or YAML), filters the "paths"
to include only endpoints that start with any of the predefined prefixes for basic
Kubernetes objects (such as namespaces, pods, configmaps, roles, etc.),
and writes the filtered spec to an output file.

Usage:
    python extract_k8s_endpoints.py input_spec.yaml output_spec.yaml
    # Optionally add more prefixes:
    python extract_k8s_endpoints.py input_spec.yaml output_spec.yaml --prefix /apis/batch
"""

import argparse
import os
import sys
import json
import yaml

# Default prefixes for common Kubernetes objects.
DEFAULT_PREFIXES = [
    "/api/v1/namespaces",                # Namespaces, pods, configmaps, etc.
    "/apis/rbac.authorization.k8s.io",    # Roles, RoleBindings, ClusterRoles, ClusterRoleBindings
    "/apis/apps",                        # Deployments, ReplicaSets, etc.
    "/apis/batch",                       # Jobs, CronJobs, etc.
    "/apis/core",                        # Sometimes core endpoints are also under /apis/core (if present)
    # You can add more defaults here as needed.
]

def load_spec(file_path):
    """Load an OpenAPI spec from a JSON or YAML file."""
    with open(file_path, "r", encoding="utf-8") as f:
        if file_path.lower().endswith((".yaml", ".yml")):
            try:
                return yaml.safe_load(f)
            except Exception as e:
                sys.exit(f"Error loading YAML file: {e}")
        elif file_path.lower().endswith(".json"):
            try:
                return json.load(f)
            except Exception as e:
                sys.exit(f"Error loading JSON file: {e}")
        else:
            sys.exit("Unsupported file type. Please use JSON or YAML.")

def write_spec(spec, file_path):
    """Write the OpenAPI spec to a JSON or YAML file."""
    with open(file_path, "w", encoding="utf-8") as f:
        if file_path.lower().endswith((".yaml", ".yml")):
            yaml.dump(spec, f, sort_keys=False, default_flow_style=False)
        elif file_path.lower().endswith(".json"):
            json.dump(spec, f, indent=2)
        else:
            sys.exit("Unsupported file type for output. Please use JSON or YAML.")

def filter_paths(spec, prefixes):
    """Filter the paths in the spec to only those that start with one of the provided prefixes."""
    original_paths = spec.get("paths", {})
    new_paths = {}
    for path, path_obj in original_paths.items():
        for prefix in prefixes:
            if path.startswith(prefix):
                new_paths[path] = path_obj
                break  # Found a matching prefix; move to next path.
    spec["paths"] = new_paths
    return spec

def main():
    parser = argparse.ArgumentParser(
        description="Extract endpoints for basic Kubernetes objects from an OpenAPI/Swagger spec."
    )
    parser.add_argument("input_file", help="Input OpenAPI spec file (JSON or YAML).")
    parser.add_argument("output_file", help="Output file to write the filtered spec (JSON or YAML).")
    parser.add_argument(
        "--prefix",
        action="append",
        help="Additional path prefix to include. Can be used multiple times. Defaults include basic Kubernetes objects."
    )
    args = parser.parse_args()

    # Ensure input file exists.
    if not os.path.exists(args.input_file):
        sys.exit(f"Input file {args.input_file} does not exist.")

    # Load the spec.
    spec = load_spec(args.input_file)
    if spec is None:
        sys.exit("Failed to load spec.")

    # Combine default prefixes with any additional provided prefixes.
    prefixes = DEFAULT_PREFIXES.copy()
    if args.prefix:
        prefixes.extend(args.prefix)

    # Filter paths.
    spec = filter_paths(spec, prefixes)
    print(f"Filtered spec contains {len(spec.get('paths', {}))} endpoints.")

    # Write the filtered spec.
    write_spec(spec, args.output_file)
    print(f"Filtered spec written to {args.output_file}")

if __name__ == "__main__":
    main()
