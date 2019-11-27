const express = require("express");
const helmet = require("helmet");
//  init app

const app = express();

app.set("views", "public");
app.set("view engine", "pug");
app.route("/").get((req, res) => {
  //   let ip = req.header("x-forwarded-for") || req.connection.remoteAddress;
  let ip = req.ip;
  res.setHeader("X-Powered-By", "Awesomeness");
  res.render("index", { ip: ip });
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`App running on port: ${PORT}`));
