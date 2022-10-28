const connection = require('./connection.js');

class db {
    constructor(connection) {
        this.connection = connection
    }



allEmployees  ()  {
    return this.connection.promise().query("SELECT employee.id, employee.first_name, employee.last_name, member_role.role_title, departments.department_name AS departments, member_role.role_salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN member_role on employee.role_id = member_role.id LEFT JOIN departments on member_role.department_id LEFT JOIN employee manager on manager.id = employee.manager_id;")
}


addEmployee  (employee)  {
    return this.connection.promise().query("INSERT INTO employee SET ?", employee)
}


employeeRole  ()  {
    return this.connection.promise().query("UPDATE employee SET WHERE ?")
}


allRoles  ()  {
    return this.connection.promise().query("SELECT * from member_role")
}


addRole  ()  {
    return this.connection.promise().query("INSERT INTO member_role SET ?")
} 


allDepartments  ()  {
    return this.connection.promise().query("SELECT * from departments")
} 


addDepartment  ()  {
    return this.connection.promise().query("INSERT INTO departments SET ?")
}


}






module.exports = new db(connection);