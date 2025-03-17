const SwaggerParser = require("swagger-parser");
const fs = require("fs");
SwaggerParser.dereference("swagger.json")
    .then(api => {
        console.log("Dereferenced API:", JSON.stringify(api, null, 2));
        // Optionally, write the output to a file.
        fs.writeFileSync("swagger-dereferenced_new.json", JSON.stringify(api, null, 2));
    })
    .catch(err => {
        console.error("Error dereferencing spec:", err);
    });
