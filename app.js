let express = require("express");
let app = express();
let bodyParser = require("jsonwebtoken");
require("dotenv").config();

app.listen(process.env.port, () => {
  console.log("Server is running on port 3000");
});

app.get('/register', (req, res) => {
  let("Reg;
});