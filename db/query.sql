SELECT 
employee.id, employee.first_name, member_role.role_title, departments.department_name, member_role.role_salary, employee.manager_id
FROM employee
JOIN member_role ON employee.role_id = role_title
JOIN departments ON employee.department_id = department_name