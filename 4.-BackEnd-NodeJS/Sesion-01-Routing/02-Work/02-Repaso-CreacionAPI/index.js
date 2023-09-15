const express = require("express");
const app = express();

const helloRouter = require("./routers/hello");
const goodbyeRouter = require("./routers/goodbye");

// Instalando los multiples routers en una sola app
app.use(helloRouter, goodbyeRouter);

app.listen(8080, function() {
  console.log("> Escuchando puerto: 8080.");
})