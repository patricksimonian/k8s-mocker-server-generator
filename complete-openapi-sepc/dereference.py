import json
from prance import ResolvingParser

# Path to your original spec.
spec_file = "swagger.json"
filtered_spec_file = "filtered_spec.json"
final_dereferenced_file = "dereferenced_spec.json"

# The offending definition key and its non-standard $ref pointer.
offending_def = "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.JSONSchemaProps"
offending_ref = "#/definitions/" + offending_def

def remove_offending_definition(spec):
    """
    Remove the offending definition from spec['definitions'].
    """
    if "definitions" in spec and offending_def in spec["definitions"]:
        print(f"Removing offending definition: {offending_def}")
        del spec["definitions"][offending_def]
    else:
        print("Offending definition not found in 'definitions'.")

def replace_offending_refs(obj):
    """
    Recursively traverse obj (which may be a dict or list) and replace any
    occurrence of a $ref equal to offending_ref with an inline empty object schema.
    """
    if isinstance(obj, dict):
        if "$ref" in obj and obj["$ref"] == offending_ref:
            # Replace the offending $ref with a simple empty object schema.
            print("Replacing an offending $ref occurrence.")
            obj.pop("$ref")
            obj["type"] = "object"
            obj["properties"] = {}
            return
        # Recursively process all dictionary values.
        for key, value in obj.items():
            replace_offending_refs(value)
    elif isinstance(obj, list):
        for item in obj:
            replace_offending_refs(item)

# Step 1: Load the original spec.
with open(spec_file, "r") as f:
    spec = json.load(f)

# Step 2: Remove the offending definition from "definitions".
remove_offending_definition(spec)

# Step 3: Recursively replace any $ref that equals the offending reference.
replace_offending_refs(spec)

# Step 4: Write out the filtered spec.
with open(filtered_spec_file, "w") as f:
    json.dump(spec, f, indent=2)
print(f"Filtered spec written to {filtered_spec_file}")

# Step 5: Use Prance to dereference the filtered spec.
try:
    parser = ResolvingParser(filtered_spec_file)
    dereferenced_spec = parser.specification
    with open(final_dereferenced_file, "w") as f:
        json.dump(dereferenced_spec, f, indent=2)
    print(f"Dereferenced spec written to {final_dereferenced_file}")
except Exception as e:
    print("Error during dereferencing:", e)
