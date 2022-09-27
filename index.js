// List dependencies
const inquirer = require('inquirer');
const consoleTable = require('console.table');
const util = require('util');
const connection = require('./db/connection');

// Welcome message

console.log('=======================================================================================================');
console.log(``);
console.log((' * * * * * * * * * * * * * * * * * * * * * * EMPLOYEE TRACKER * * * * * * * * * * * * * * * * * * * * * '));
console.log(``);
console.log(`=======================================================================================================`);

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

const viewEmployees = async () => {
    const query = 'SELECT * FROM employee';
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.table(res);
        console.log('viewing employees');
    })
    askQuestions();
}


// view all departments; 

const viewDepartments = async () => {
    const query = 'SELECT * FROM department';
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.table(res);
        console.log('viewing departments');
    })
    askQuestions();
}


// view all roles; 

const viewRoles = async () => {
    const query = 'SELECT * FROM role';
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.table(res);
        console.log('viewing roles');
    })
    askQuestions();
}

// add new employee; 

// const addEmployee = () => {
//     connection.query('SELECT * FROM role', (err, roles) => {
//         if (err) console.log(err);
//         roles = roles.map((role) => {
//             return {
//                 name: role.title,
//                 value: role.id,
//             };
//         });
//         inquirer
//             .prompt([
//                 {
//                     type: 'input',
//                     name: 'firstName',
//                     message: 'Enter first name of new employee...'
//                 },
//                 {
//                     type: 'input',
//                     name: 'lastName',
//                     message: 'Enter last name of new employee...'
//                 },
//                 {
//                     type: 'list',
//                     name: 'role',
//                     message: 'Enter new employee role...',
//                     choices: roles,
//                 },
//                 {
//                     type: 'list',
//                     name: 'managerId',
//                     message: 'select a manager id...',
//                     choices: [1, 3, 5, 6, 7]
//                 }
//             ])
//             .then((data) => {
//                 console.log(data.role);
//                 connection.query(
//                     'INSERT INTO employee SET ?',
//                     {
//                         first_name: data.firstName,
//                         last_name: data.lastName,
//                         role_id: data.role,
//                         manager_id: data.managerId
//                     },
//                     (err) => {
//                         if (err) throw err;
//                         console.log('Updated Employee Roster;');
//                         viewAllEmployees();

//                     }
//                 );
//             });

//     });

// };

// add new department; 

// add new role; 

// update employee role

askQuestions();