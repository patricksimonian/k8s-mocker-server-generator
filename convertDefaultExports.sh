#!/bin/bash

# Ensure a directory path is provided
if [ -z "$1" ]; then
    echo "Usage: $0 <directory>"
    exit 1
fi

FILE_PATH=$1

# Check if directory exists
if [ ! -d "$FILE_PATH" ]; then
    echo "Error: Directory '$FILE_PATH' not found!"
    exit 1
fi

# Process each TypeScript file in the directory
for file in "$FILE_PATH"/*.ts; do
    if [ -f "$file" ]; then
        echo "Processing file: $file"

        # Add "export " to function definitions that don't already have it
        # Handles both async and non-async functions
        sed -i.bak -E 's/^(const [a-zA-Z0-9_]+ = (async )?\(.*\) => )/export \1/' "$file"

        # Remove backup file (macOS-specific fix)
        rm -f "$file.bak"
    fi
done

echo "Conversion completed!"
