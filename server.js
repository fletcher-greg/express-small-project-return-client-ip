const express = require("express");
const helmet = require("helmet");
//  init app

const app = express();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`App running on port: ${PORT}`));
