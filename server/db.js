var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "mybb.cfpgvexeasco.us-east-2.rds.amazonaws.com",
  user: "reku68",
  password: "password",
  database: "canadaamazon",
  port: 3306
});

connection.connect(err => {
  if (err) {
    console.log("Connection error from the db.js file: ", err);
  } else {
    console.log("Connected to the Database!!!");
  }
});

// This request sends all db data from productDescription
const sendProductTask = (productId, callback) => {
  connection.query(
    `SELECT * FROM Products WHERE id = ('${productId}');`,
    (error, data) => {
      if (error) {
        callback(error);
      } else {
        connection.query(
          `SELECT AVG(rating) FROM Reviews WHERE product_id="${productId}"`,
          (err, data2) => {
            console.log("This is from the db query: ", data, data2);
            if (err) {
              callback(err);
            } else {
              data.rating = data2;
              callback(null, data);
            }
          }
        );
      }
    }
  );
};

module.exports = { sendProductTask };
