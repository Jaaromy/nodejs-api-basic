const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const NOT_IMPLEMENTED = 501;

router.get("/", (req, res) => {
  res.sendStatus(NOT_IMPLEMENTED);
});

router.get("/:id", (req, res) => {
  res.sendStatus(NOT_IMPLEMENTED);
});

router.post("/", jsonParser, (req, res) => {
  res.sendStatus(NOT_IMPLEMENTED);
});

router.put("/", jsonParser, (req, res) => {
  res.sendStatus(NOT_IMPLEMENTED);
});

router.patch("/", jsonParser, (req, res) => {
  res.sendStatus(NOT_IMPLEMENTED);
});

module.exports = router;
