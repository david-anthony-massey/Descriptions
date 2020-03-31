const express = require("express");
var cors = require("cors");
const app = express();
const port = process.env.PORT || 8081; // updated from 3000
const path = require("path");
const db = require("./db.js");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// This line is necessary to render React files
app.use(express.static(path.join(__dirname, "/../client/dist")));

// get request using sendProductTask
app.get("/products/:productId", (req, res) => {
  const productId = req.params.productId;
  db.sendProductTask(productId, (err, results) => {
    if (err) {
      console.log(err);
    } else {
      res.send(results);
      res.end();
    }
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
