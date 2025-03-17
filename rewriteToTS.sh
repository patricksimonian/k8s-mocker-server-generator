#!/bin/bash

# This script will rewrite all .js files in the current directory to .ts files
# and replace all instances of 'require' with 'import' and '.js' with '.ts'

FILE_PATH=$1

for file in $FILE_PATH/*.js
do
    echo "Converting $file to TypeScript"
    mv "$file" "${file%.js}.ts"
   
done

for file in "$FILE_PATH"/*.ts; do
    if [ -f "$file" ]; then
        echo "Processing $file"

        # Convert require() to import statements
        awk '
        {
            gsub(/const ([a-zA-Z0-9_]+) = require\(["'"'"']([^"'"'"']+)["'"'"']\)/, "import \\1 from \"\\2\"");
            gsub(/const \{([^}]+)\} = require\(["'"'"']([^"'"'"']+)["'"'"']\)/, "import { \\1 } from \"\\2\"");
            gsub(/import (.+) from "([^"]+)\.js"/, "import \\1 from \"\\2.ts\"");
            print;
        }' "$file" > temp_file && mv temp_file "$file"

        # Convert `module.exports = { ... }` to `export default { ... }`
        awk '
        {
            gsub(/module\.exports = \{/, "export default {");
            print;
        }' "$file" > temp_file && mv temp_file "$file"

        # Convert `module.exports = someFunction;` to `export default someFunction;`
        awk '
        {
            gsub(/^module\.exports = ([a-zA-Z0-9_]+);$/, "export default \\1;");
            print;
        }' "$file" > temp_file && mv temp_file "$file"

        # Convert `exports.something = someFunction;` to `export const something = someFunction;`
        awk '
        {
            gsub(/^exports\.([a-zA-Z0-9_]+) = ([a-zA-Z0-9_]+);$/, "export const \\1 = \\2;");
            print;
        }' "$file" > temp_file && mv temp_file "$file"
    fi
done

echo "Conversion completed!"
