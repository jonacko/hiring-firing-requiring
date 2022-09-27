USE employeelist;

INSERT INTO department
(name)

VALUES
('Sales'),
('Engineering'),
('Finance'),
('Legal');

INSERT INTO role (title, salary, department_id)

VALUES
('Sales Manager', 60000.60, 1),
('Sales Associate', 40000.40, 1),
('Engineering Manager', 65000.65, 2),
('Engineering Associate', 6500.65, 2),
('Finance Manager', 70000.70, 3),
('Finance Associate', 50000.55, 3),
('Legal Manager', 100000.10, 4),
('Legal Associate', 80000.88, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)

VALUES
('James', 'McAvoy', 1, null),
('Alan', 'Rickman', 2, 1),
('John', 'Cussack', 3, null),
('Siouxsie', 'Sioux', 4, 3),
('Anthony', 'Hopkins', 5, null),
('Cameron', 'Diaz', 6, 5),
('Robert', 'Smith', 7, null),
('Mads', 'Mikkelsen', 8, 7);