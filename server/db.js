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

// module.exports = {};
 

