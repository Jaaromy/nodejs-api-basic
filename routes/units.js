const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const db = require("../db/db");
const validate = require("../validation/validate");
const OK = 200;
const NOT_FOUND = 404;
const BAD_REQUEST = 400;
const NOT_IMPLEMENTED = 501;

router.get("/types", (req, res) => {
  res.send(db.getTypeNames());
});

router.get("/:id", (req, res) => {
  let status = OK;
  let message = "";

  let item = db.getById(req.params.id);
  message = item;

  if (!message) {
    status = NOT_FOUND;
    message = `Unit '${req.params.id}' Not Found`;
  }

  res.status(status).send(message);
});

// Filtering
const filterMiddleware = (req, res, next) => {
  if (req.query.filter && (req.query.filter.expired || req.query.filter.type)) {
    res.status(OK).send(db.getFiltered(req.query.filter));
  } else {
    return next();
  }
};

// Get all units
router.get("/", filterMiddleware, (req, res) => {
  res.status(OK).send(db.getAllUnits());
});

// Add new units
router.post("/", jsonParser, (req, res) => {
  if (!req.body || !req.body.data) {
    return res.status(BAD_REQUEST).send("Post must contain body and data");
  }

  let data = req.body.data;

  let schema = db.getSchema(data.type);

  if (!schema) {
    res.status(BAD_REQUEST).send(`No schema found for the '${data.type}' type.`);
  }

  let result = validate(data, schema);

  if (result.valid) {
    let ret = {};
    // TODO: Make this get the actual logged in user
    data.userId = db.getUser().id;
    ret.data = db.addUnit(data);
    res.send(ret);
  } else {
    res.status(BAD_REQUEST).send(result.errors);
  }
});

// Replace unit
router.put("/:id", jsonParser, (req, res) => {
  res.sendStatus(NOT_IMPLEMENTED);
});

// Update unit
router.patch("/:id", jsonParser, (req, res) => {
  res.sendStatus(NOT_IMPLEMENTED);
});

module.exports = router;
