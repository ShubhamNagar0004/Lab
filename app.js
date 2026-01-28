let express = require("express");
let app = express();
app.get("/product/:id", (req, res) => {
  console.log(req.params);
  res.send("this is a product route");
});
app.listen(3000, () => {
  console.log("app is running on port 3000");
});
