const express = require("express");

const app = express();
const units = require("./routes/units");
const users = require("./routes/users");
const types = require("./routes/types");

app.use("/units", units);
app.use("/users", users);
app.use("/types", types);

// All other paths and verbs return 404 - Not Found
app.all("/*", (req, res) => {
  res.sendStatus(404);
});

app.listen(3000, () => {
  console.log("server listening on port 3000");
});
