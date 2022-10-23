INSERT INTO departments (department_name)
VALUES ('Engineering'), 
       ('Finances'),
       ('Legal'),
       ('Sales');

INSERT INTO member_role (role_title, department_id, role_salary)
VALUES ('Sales Lead', 4, 100000),
       ('Salesperson', 4, 80000),
       ('Lead Engineer', 1, 150000),
       ('Software Engineer', 1, 120000),
       ('Account Manager', 2, 160000),
       ('Accountant', 2, 125000),
       ('Legal Team Lead', 3, 250000),
       ('Lawyer', 3, 190000);

INSERT INTO employee (first_name, last_name, employee_id, manager_id)
VALUES ('John', 'Doe', 1),
       ( 'Mike', 'Chan', 2, 1),
       ( 'Ashley', 'Rodriguez', 3),
       ( 'Kevin', 'Tupik', 4, 3),
       ( 'Kunal', 'Singh', 5),
       ( 'Malia', 'Brown', 6, 5),
       ( 'Sarah', 'Lourd', 7),
       ( 'Tom', 'Allen', 8, 7); 
