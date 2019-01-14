const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

const app = express();
const units = require("./routes/units");
const users = require("./routes/users");
const types = require("./routes/types");
const VERSION = "v1";

app.use(`/${VERSION}/api-docs`, swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(`/${VERSION}/units`, units);
app.use(`/${VERSION}/users`, users);
app.use(`/${VERSION}/types`, types);

// All other paths and verbs return 404 - Not Found
app.all("/*", (req, res) => {
  res.sendStatus(404);
});

app.listen(3000, () => {
  console.log("server listening on port 3000");
});
