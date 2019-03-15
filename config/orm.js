const connection = require("./connection")
//define the orm object
const orm = {
  //selects all burgers from the burger table
  all: function (tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  //inserts a burger
  //burger should be a string of the burger name
  insertOne: function (burger) {
    const queryString = `INSERT INTO burgers (burger_name, devoured) VALUES ("${burger}",false);`;
    connection.query(queryString, function (err, result) {
      if (err) throw err;
    })
    // cb(result)
  },

  updateOne: function (burger) {
    const queryString = `UPDATE burgers SET devoured =true WHERE burger_name="${burger}";`
    connection.query(queryString, burger, function (err, result) {
      if (err) throw err;
    })
  }
}

module.exports = orm