// Router es una pieza aislada de una aplicacion de express


const express = require("express");
const router = express.Router();

router.get("/hello", function(request, response) {
  response.send("Hola mundo");
});

module.exports = router;