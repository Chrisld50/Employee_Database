DROP DATABASE IF EXISTS companylist_db;
CREATE DATABASE companylist_db;

USE companylist_db;

CREATE TABLE departments (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
department_name VARCHAR(30) NOT NULL
);

CREATE TABLE member_role (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
role_title VARCHAR(30) NOT NULL,
role_salary INT,
FOREIGN KEY (department_id)
REFERENCES departments(id)
ON DELETE SET NULL
);

CREATE TABLE employee (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30) NOT NULL,
FOREIGN KEY (employee_id)
REFERENCES member_role(id)
ON DELETE SET NULL,
FOREIGN KEY (manager_id)
REFERENCES KEY employee(id)
);