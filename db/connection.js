//  Creates connection to mySQL

const mysql = require("mySQL2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "kinderbueno1234",
    database: "employeelist",
})

connection.connect(function (err) {
    if (err) throw err;

     // run the askQuestons function after the connection is made to prompt the user
   askQuestions();
});


module.exports = connection;