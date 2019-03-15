const mysql = require("mysql");
//define connection
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "burgers_db"
});
//intiate connection 
connection.connect(function (err) {
    if (err) throw err;  
});

module.exports=connection