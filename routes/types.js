const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();

router.get("/:name", (req, res) => {
  res.status(500).send("TODO: Implement");
});

router.post("/", jsonParser, (req, res) => {
  res.status(500).send("TODO: Implement");
});

router.put("/", jsonParser, (req, res) => {
  res.status(500).send("TODO: Implement");
});

router.patch("/", jsonParser, (req, res) => {
  res.status(500).send("TODO: Implement");
});

module.exports = router;
