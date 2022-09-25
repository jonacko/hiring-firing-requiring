// List dependencies
const inquirer = require('inquirer');
const consoleTable = require('console.table');
const util = require('util');
const connection = require('./db/connection');

// Welcome message

console.log('=======================================================================================================');
console.log(``);
console.log(('EMPLOYEE TRACKER'));
console.log(``);
console.log(`======================================================================================================`);

// Prompts

function askQuestions() {
    inquirer
        .prompt([
            {
                type: "list",
                name: "startOptions",
                message: "What would you like to do?",
                choices: [
                    "View all departments",
                    "View all roles",
                    "View all employees",
                    "Add a department",
                    "Add a role",
                    "Add an employee",
                    "Update an employee role",
                    "Exit program"
                ]
            }
        ])
        .then(answers => {

            switch (answers.startOptions) {

                case "View all departments":
                    viewDepartments();
                    break;

                case "View all roles":
                    viewRoles();
                    break;

                case "View all employees":
                    viewEmployees();
                    break;

                case "Add a department":
                    addDepartment();
                    break;

                case "Add a role":
                    addRole();
                    break;

                case "Add an employee":
                    addEmployee();
                    break;

                case "Update an employee role":
                    updateEmployee();
                    break;
                default:
                    console.log("Goodbye!");
                    process.exit();
            };
        });
};



// Create functions to: 

// view all employees; 

const viewEmployees = () => {
    const query = 'SELECT * FROM employee';
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.table(res);
        console.log('jhwefjefj');
    })
    askQuestions();
}


// view all departments; 

// view all roles; 

// add new employee; 

// add new department; 

// add new role; 

// update employee role

askQuestions();