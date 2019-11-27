const express = require("express");
const helmet = require("helmet");
//  init app

const app = express();

app.set("trust proxy", true);
app.route("/").get((req, res) => {
  let ip = req.header("x-forwarded-for") || req.connection.remoteAddress;
  //   let ip = req.ips;
  console.log(req.ips);
  console.log(req.ip);
  res.send(`Your ip address is ${ip}`);
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`App running on port: ${PORT}`));
