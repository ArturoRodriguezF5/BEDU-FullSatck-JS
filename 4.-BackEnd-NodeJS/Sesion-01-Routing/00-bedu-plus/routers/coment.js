const express = require("express");
const router = express.Router();

router.get("/getComent", function(request, response) {
  response.json([]);
});

module.exports = router;