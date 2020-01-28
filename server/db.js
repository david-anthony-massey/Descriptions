var mysql      = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'FECDescription'
});
 
connection.connect( err => {
  if ( err ) {
    console.log( 'This is in the db; ', err )
  } else {
    console.log( "Connected to the Database!!!" )
  }
});

const sendProductTask = (callback) => {
  connection.query('SELECT * from productDescription;', (error, results) => {
    //console.log("This is frome the db send product name: ", results)
    if (error) {
      callback(error);
    } else {
      callback(null, results);
    }
})
}

module.exports = { sendProductTask };
 

