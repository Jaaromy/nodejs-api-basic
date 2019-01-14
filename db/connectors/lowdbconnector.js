const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const lodashId = require("lodash-id");

const adapter = new FileSync("db.json");
const db = low(adapter);

// Mixin for autmatically handling id based records
db._.mixin(lodashId);
db.defaults({ units: [], users: [], count: 0 }).write();

function getById(id) {
  return db
    .get("units")
    .getById(id)
    .value();
}

function getByType(type) {
  return db.get("units").filter({ type: type });
}

function getExpired(date) {
  return db.get("units").filter(u => {
    return u.expired < date;
  });
}

function getTypeNames() {
  return db.get("types").map("name");
}

function getAllUnits() {
  return db.get("units");
}

function getSchema(type) {
  return db
    .get("types")
    .find({ name: type })
    .value().schema;
}

function addUnit(data) {
  return db
    .get("units")
    .insert(data)
    .write();
}

function getUser() {
  return db.get("users").value();
}

module.exports.getById = getById;
module.exports.getByType = getByType;
module.exports.getExpired = getExpired;
module.exports.getTypeNames = getTypeNames;
module.exports.getAllUnits = getAllUnits;
module.exports.getSchema = getSchema;
module.exports.addUnit = addUnit;
module.exports.getUser = getUser;
