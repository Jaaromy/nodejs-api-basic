const connector = require("./connectors/lowdbconnector");

function getById(val) {
  return connector.getById(val);
}

function getByType(type) {
  return connector.getByType(type);
}

function getExpired(date) {
  return connector.getExpired(date);
}

function getTypeNames() {
  return connector.getTypeNames();
}

function getAllUnits() {
  return connector.getAllUnits();
}

function getUser() {
  return connector.getUser();
}

function getSchema(type) {
  return connector.getSchema(type);
}

function addUnit(data) {
  return connector.addUnit(data);
}

function getFiltered(filters) {
  return connector.getFiltered(filters);
}

module.exports.getById = getById;
module.exports.getByType = getByType;
module.exports.getExpired = getExpired;
module.exports.getTypeNames = getTypeNames;
module.exports.getAllUnits = getAllUnits;
module.exports.getUser = getUser;
module.exports.getSchema = getSchema;
module.exports.addUnit = addUnit;
module.exports.getFiltered = getFiltered;
