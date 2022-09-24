// List dependencies

// Welcome message

console.log(chalk.yellow.bold('======================================================================================================='));
console.log(``);
console.log(chalk.red.bold(figlet.textSync('EMPLOYEE TRACKER')));
console.log(``);
console.log(`                               ` + chalk.green.bold('(C)ONTENT (M)ANAGEMENT (S)YSTEM'));
console.log(``);
console.log(chalk.yellow.bold(`======================================================================================================`));)

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