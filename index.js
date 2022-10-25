const inquirer = require('inquirer');
const cTable = require('console.table');
const db = require('./db')

  init();


  function init(){  // This function initializes inquirer and starts the list of questions. 
    console.log('******************************')
    console.log('*                            *')
    console.log('*      EMPLOYEE MANAGER      *')
    console.log('*                            *')
    console.log('******************************')



      inquirer.prompt([
          {
              type: 'list',
              name: 'userChoice',
              message: 'What would you like to do?',
              choices: ['Add Employee','View All Employees', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'Quit.']
      
          },
      ])
      .then((data) => {  
          const {userChoice} = data
         switch (userChoice) {
          case 'Add Employee':
              _addEmployee()
              break;
          case 'View All Employees':
              _allEmployees()
              break;
          case 'Update Employee Role':
              _employeeRole()
              break;
          case 'View All Roles':
              _allRoles()
              break;
          case 'Add Role':
              _addRole()
              break;
          case 'View All Departments':
              _allDepartments()
              break;
          case 'Add Department':
              _addDepartment()
              break;
          case 'Quit':
              _quit()
              break;
          default:
              break;
         }
      })
      .catch((error) => {console.log(error)})
  }


  _addEmployee = () => {
    inquirer.prompt([
        {
            type:'input',
            name:'firstName',
            message: 'What is employees first name?'
        },
        {
            type:'input',
            name:'lastName',
            message: 'What is employees last name?'
        }
    ])
  }


  _allEmployees = () => {
    db.findAllEmployees
  }

  _employeeRole = () => {
    inquirer.prompt([
        {
            type:'choice',
            name:'ChangeRole',
            message: 'What is employees new role?',
            choice: role
        }
    ])
  }

  _allRoles = () => {

  }

  _addRole = () => {
    inquirer.prompt([
        {
            type:'input',
            name:'addRole',
            message:'What is the new role you would like to add?'
        }
    ])
  }

  _allDepartments = () => {

  }

  _addDepartment = () => {
    inquirer.prompt([
        {
            type:'input',
            name:'addDepartment',
            message:'What is the new department you would like to add?'
        }
    ])
  }

  _quit()