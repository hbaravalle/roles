const compartirVariables = require("./middlewares/compartirVariables");
const routes = require("./routes");
const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(routes);

app.listen(3000, () => console.log("Servidor corriendo en el puerto 3000"));
