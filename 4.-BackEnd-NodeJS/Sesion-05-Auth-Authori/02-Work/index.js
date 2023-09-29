const express = require("express");
const app = express();

const db = {
  username: "paquito",
  password: "1232432442"
};

app.get("/protegida", function(request, response) {
  response.send("Solo usuarios con sesión pueden ver esto.");
});