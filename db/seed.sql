USE employeelist;

INSERT INTO department
(name)

VALUES
('Sales'),
('Support'),
('Marketing'),
('Development');

INSERT INTO role (title, salary, department_id)

VALUES
('Sales Manager', 60000.60, 1),
('Sales Associate', 40000.40, 1),
('Support Manager', 65000.65, 2),
('Support Associate', 6500.65, 2),
('Marketing Manager', 70000.70, 3),
('Marketing Associate', 50000.55, 3),
('Development Manager', 100000.10, 4),
('Development Associate', 80000.88, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)

VALUES
('James', 'McAvoy', 1, 2),
('Alan', 'Rickman', 2, 1),
('John', 'Cussack', 3, 4),
('Siouxsie', 'Sioux', 4, 3),
('Anthony', 'Hopkins', 5, 6),
('Cameron', 'Diaz', 6, 5),
('Robert', 'Smith', 7, 8),
('Mads', 'Mikkelsen', 8, 7);