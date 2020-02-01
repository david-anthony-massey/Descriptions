var mysql      = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'FECDescription'
});
 
connection.connect( err => {
  if ( err ) {
    console.log( 'This is in from db connect; ', err )
  } else {
    console.log( "Connected to the Database!!!" )
  }
});

// This request sends all db data from productDescription
const sendProductTask = (productId, callback) => {
  connection.query(`SELECT * FROM productDescription WHERE product_Id = ('${productId}');`, (error, results) => {
    console.log("This is from the db send product name: ", results)
    if (error) {
      callback(error);
    } else {
      callback(null, results);
    }
})
}

module.exports = { sendProductTask };
 

