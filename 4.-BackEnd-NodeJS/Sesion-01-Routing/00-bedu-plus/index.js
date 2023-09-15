require("dotenv").config();

const express = require("express");
const app = express();
app.use(express.json());

const routerArticle = require("./routers/article");
const routerComent = require("./routers/coment");
const routerUser = require("./routers/user");

app.use(routerArticle, routerComent, routerUser);

app.listen(process.env.SERVER_PORT, function() {
  console.log(`> Escuchando puerto: ${process.env.SERVER_PORT}`);
});
