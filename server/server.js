const express = require('express')
const app = express()
const port = 3000
const path = require("path");
const db = require("./db.js"); 
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));





app.use(express.static(path.join(__dirname, "/../client/dist")));

//app.get('/', (req, res) => res.send('Hello, from the server!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))