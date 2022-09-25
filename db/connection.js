//  Creates connection to mySQL

const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "employeelist",
})

connection.connect(function (err) {
    if (err) throw err;

  console.log('Connected to database!')
});


module.exports = connection;