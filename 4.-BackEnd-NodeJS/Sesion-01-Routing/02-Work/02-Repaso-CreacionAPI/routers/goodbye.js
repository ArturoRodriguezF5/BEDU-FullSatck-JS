const express = require("express");
const router = express.Router();

router.get("/goodbye", function(request, response) {
  response.send("Good bye");
});

module.exports = router;