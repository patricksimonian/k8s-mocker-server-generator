import json

with open("dereferenced_swagger.json") as f:
    spec = json.load(f)

def check_refs(obj):
    if isinstance(obj, dict):
        for key, value in obj.items():
            if key == "$ref" and not isinstance(value, str):
                print("Invalid $ref:", value)
            else:
                check_refs(value)
    elif isinstance(obj, list):
        for item in obj:
            check_refs(item)

check_refs(spec)
