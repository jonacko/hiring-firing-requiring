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
        console.log('CURRENTLY VIEWING EMPLOYEES');
    })
    askQuestions();
}


// view all departments; 

const viewDepartments = async () => {
    const query = 'SELECT * FROM department';
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.table(res);
        console.log('CURRENTLY VIEWING DEPARTMENTS');
    })
    askQuestions();
}


// view all roles; 

const viewRoles = async () => {
    const query = 'SELECT * FROM role';
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.table(res);
        console.log('CURRENTLY VIEWING ROLES');
    })
    askQuestions();
}

// add new employee; 

const addEmployee = async () => {
    connection.query('SELECT * FROM role', (err, roles) => {
        if (err) console.log(err);
        roles = roles.map((role) => {
            return {
                name: role.title,
                value: role.id,
            };
        });
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'firstName',
                    message: 'Please enter first name of new employee:'
                },
                {
                    type: 'input',
                    name: 'lastName',
                    message: 'Please enter last name of new employee:'
                },
                {
                    type: 'list',
                    name: 'role',
                    message: 'Please enter new employee role:',
                    choices: roles,
                },
                {
                    type: 'list',
                    name: 'managerId',
                    message: 'Please select a manager id:',
                    choices: [1, 3, 5, 7, 9]
                }
            ])
            .then((data) => {
                console.log(data.role);
                connection.query(
                    'INSERT INTO employee SET ?',
                    {
                        first_name: data.firstName,
                        last_name: data.lastName,
                        role_id: data.role,
                        manager_id: data.managerId
                    },
                    (err) => {
                        if (err) throw err;
                        console.log('EMPLOYEE RECORDS UPDATED');
                        viewEmployees();

                    }
                );
            });

    });

};

// add new department; 

const addDepartment = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'newDepartment',
                message: 'Please enter new department name:'
            },
        ])
        .then((data) => {
            connection.query('INSERT INTO department SET ?',
                {
                    name: data.newDepartment,
                },
                function (err) {
                    if (err) throw err;
                }
            );
            console.log('NEW DEPARTMENT ADDED')
            viewDepartments();
        });
};


connection.connect((err) => {
    if (err) throw err;


    askQuestions();

});

// update employee role:

const updateEmployee = async () => {
    connection.query('SELECT * FROM employee', (err, employees) => {
        if (err) console.log(err);
        employees = employees.map((employee) => {
            return {
                name: `${employee.first_name} ${employee.last_name}`,
                value: employee.id,
            };
        });
        connection.query('SELECT * FROM role', (err, roles) => {
            if (err) console.log(err);
            roles = roles.map((role) => {
                return {
                    name: role.title,
                    value: role.id,
                }
            });
            inquirer
                .prompt([
                    {
                        type: 'list',
                        name: 'selectEmployee',
                        message: 'Please select employee to update:',
                        choices: employees,
                    },
                    {
                        type: 'list',
                        name: 'selectNewRole',
                        message: 'Please select employee role:',
                        choices: roles,
                    },
                ])
                .then((data) => {
                    connection.query('UPDATE employee SET ? WHERE ?',
                        [
                            {
                                role_id: data.selectNewRole,
                            },
                            {
                                id: data.selectEmployee,
                            },
                        ],
                        function (err) {
                            if (err) throw err;
                        }
                    );
                    console.log('EMPLOYEE ROLE UPDATED');
                    viewRoles();
                });

        });
    });
};

// add new role; 

const addRole = async () => {
    connection.query('SELECT * FROM department', (err, departments) => {
        if (err) console.log(err);
        departments = departments.map((department) => {
            return {
                name: department.name,
                value: department.id,
            };
        });
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'newRole',
                    message: 'Please enter title of new role:'
                },
                {
                    type: 'input',
                    name: 'salary',
                    message: 'Please enter salary of new role:',
                },
                {
                    type: 'list',
                    name: 'departmentId',
                    message: 'Please enter department of new role:',
                    choices: departments,
                },
            ])
            .then((data) => {
                connection.query(
                    'INSERT INTO role SET ?',
                    {
                        title: data.newRole,
                        salary: data.salary,
                        department_id: data.departmentId,
                    },
                    function (err) {
                        if (err) throw err;
                    }
                );
                console.log('NEW ROLE ADDED')
                viewRoles();
            });

    });

};

// BONUSES:

// Update employee managers
// View employees by manager;
// View employees by department;
// Delete department, roles, employees;
// View total utilized budget - combined salaries or employees;