const mysql = require("mySQL2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "kinderbueno1234",
    database: "employees",
})

connection.connect(function (err) {
    if (err) throw err;
});

module.exports = connection;