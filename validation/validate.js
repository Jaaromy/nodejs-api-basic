const Validator = require("jsonschema").Validator;
const baseSchema = require("./base");

function validate(item, schema) {
  let local = JSON.stringify(schema);
  local = JSON.parse(local);
  let v = new Validator();

  // Add all base schema items to the schema
  for (const key in baseSchema.properties) {
    if (baseSchema.properties.hasOwnProperty(key)) {
      const element = baseSchema.properties[key];
      local.required.push(key);
      local.properties[key] = element;
    }
  }

  return v.validate(item, local);
}

module.exports = validate;
