# hiring-firing-requiring
- Module 12 assignment for UoB Bootcamp due 28-09-22
- Walkthrough video link: https://drive.google.com/file/d/1RaSVKWTYEeYSD_i8qDU2sA0Ki7MkEfpC/view

Contents:

1. Summary
2. Key features
3. Issues encountered/further amendments
4. Credits

## 1. Summary

This project was undertaken as a submission for a Birmingham University Bootcamp assignment, with a brief to build a command-line CMS application using Node.js, Inquirer and MySQL.  The user story and acceptance criteria are as follows:

User story:

- AS A business owner
- I WANT to be able to view and manage the departments, roles, and employees in my company
- SO THAT I can organize and plan my business

Acceptance criteria:

- GIVEN a command-line application that accepts user input
- WHEN I start the application
- THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
- WHEN I choose to view all departments
- THEN I am presented with a formatted table showing department names and department ids
- WHEN I choose to view all roles
- THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
- WHEN I choose to view all employees
- THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
- WHEN I choose to add a department
- THEN I am prompted to enter the name of the department and that department is added to the database
- WHEN I choose to add a role
- THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
- WHEN I choose to add an employee
- THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
- WHEN I choose to update an employee role
- THEN I am prompted to select an employee to update and their new role and this information is updated in the database

The database schema is as follows:

<img src ="assets/images/Screenshot 2022-09-25 at 14.45.57.png">


## 2. Key features:

- welcome message appears when application is run
- command-line accepts user input
- user can view all departments, roles and employees, and are presented with a formatted table showing this information
- user can add departments and roles, and are presented with a formatted table showing this information
- user can update an employee role, and are presented with a formatted table showing this information


## 3. Issues encountered/further amendments

Please see commented out code for more details, but key issues are as follows:

TODO: 

- manager ID's are hard coded in addEmployee function; write additional query within this function to get manager from database

- bonuses:
    - Update employee managers
    - View employees by manager;
    - View employees by department;
    - Delete department, roles, employees;
    - View total utilized budget - combined salaries or employees;


## 4. Credits

- requiring modules: https://www.freecodecamp.org/news/requiring-modules-in-node-js-everything-you-need-to-know-e7fbd119be8/
