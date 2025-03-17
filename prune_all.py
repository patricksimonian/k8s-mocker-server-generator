#!/usr/bin/env python3
"""
Efficiently prune an OpenAPI/Swagger spec by removing all components and $ref references,
with optional debug output.

This script loads an OpenAPI spec (JSON or YAML), deletes the entire
`components` section, and iteratively removes any `$ref` keys from the document,
tracking visited objects to avoid reprocessing. If --verbose is provided, it will
print progress information.

Usage:
    python prune_all_efficient_debug.py input_spec.yaml output_spec.yaml [--verbose]
"""

import argparse
import os
import sys
import json
import yaml
from collections import deque

def load_spec(file_path):
    """Load an OpenAPI spec from a JSON or YAML file."""
    with open(file_path, "r", encoding="utf-8") as f:
        if file_path.lower().endswith((".yaml", ".yml")):
            try:
                return yaml.safe_load(f)
            except Exception as e:
                sys.exit("Error loading YAML file: {}".format(e))
        elif file_path.lower().endswith(".json"):
            try:
                return json.load(f)
            except Exception as e:
                sys.exit("Error loading JSON file: {}".format(e))
        else:
            sys.exit("Unsupported file type. Please use JSON or YAML.")

def write_spec(spec, file_path):
    """Write the pruned spec to a JSON or YAML file."""
    with open(file_path, "w", encoding="utf-8") as f:
        if file_path.lower().endswith((".yaml", ".yml")):
            yaml.dump(spec, f, sort_keys=False, default_flow_style=False)
        elif file_path.lower().endswith(".json"):
            json.dump(spec, f, indent=2)
        else:
            sys.exit("Unsupported output file type. Please use JSON or YAML.")

def remove_refs_iterative(obj, verbose=False):
    """
    Iteratively remove any '$ref' keys from a dictionary or list,
    while avoiding reprocessing the same object multiple times.
    If verbose is True, prints progress information.
    """
    stack = deque([obj])
    visited = set()
    processed_count = 0

    while stack:
        current = stack.pop()
        processed_count += 1
        if verbose and processed_count % 1000 == 0:
            print("Processed {} objects...".format(processed_count))
        obj_id = id(current)
        if obj_id in visited:
            continue
        visited.add(obj_id)
        if isinstance(current, dict):
            if "$ref" in current:
                if verbose:
                    print("Removing $ref from object:", current)
                del current["$ref"]
            for value in current.values():
                if isinstance(value, (dict, list)):
                    stack.append(value)
        elif isinstance(current, list):
            for item in current:
                if isinstance(item, (dict, list)):
                    stack.append(item)
    if verbose:
        print("Total objects processed: {}".format(processed_count))

def prune_spec(spec, verbose=False):
    """
    Prune the spec by deleting the 'components' section and removing any '$ref' keys.
    """
    if "components" in spec:
        if verbose:
            print("Removing entire 'components' section.")
        del spec["components"]
    remove_refs_iterative(spec, verbose=verbose)
    return spec

def main():
    parser = argparse.ArgumentParser(
        description="Prune an OpenAPI spec by removing components and $ref references, leaving only routes."
    )
    parser.add_argument("input_file", help="Input OpenAPI spec file (JSON or YAML).")
    parser.add_argument("output_file", help="Output file for the pruned spec (JSON or YAML).")
    parser.add_argument("--verbose", action="store_true", help="Print debug output during processing.")
    args = parser.parse_args()

    if not os.path.exists(args.input_file):
        sys.exit("Input file {} does not exist.".format(args.input_file))

    spec = load_spec(args.input_file)
    pruned_spec = prune_spec(spec, verbose=args.verbose)
    write_spec(pruned_spec, args.output_file)
    print("Pruned spec written to {}".format(args.output_file))

if __name__ == "__main__":
    main()
