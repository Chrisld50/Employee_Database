const db = require('./db/index');
const inquirer = require('inquirer');
const consoleTable = require('console.table')

  init();


  function init(){   
    console.log(' ')
    console.log('******************************')
    console.log('*                            *')
    console.log('*      EMPLOYEE MANAGER      *')
    console.log('*                            *')
    console.log('******************************')
    console.log(' ')



      inquirer.prompt([
          {
              type: 'list',
              name: 'userChoice',
              message: 'What would you like to do?',
              choices: ['Add Employee','View All Employees', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department']
      
          },
      ])
      .then((data) => {  
          const {userChoice} = data
         switch (userChoice) {
          case 'Add Employee':
              addEmployee()
              break;
          case 'View All Employees':
              allEmployees()
              break;
          case 'Update Employee Role':
              employeeRole()
              break;
          case 'View All Roles':
              allRoles()
              break;
          case 'Add Role':
              addRole()
              break;
          case 'View All Departments':
              allDepartments()
              break;
          case 'Add Department':
              addDepartment()
              break;
          default:
              break;
         }
      })
      .catch((error) => {console.log(error)})
  }


  const addEmployee = async () => {
    const [roles] = await db.allRoles();
    const [employees] = await db.allEmployees();

    const roleChoices = roles.map(({id, role_title}) => ({
        name: role_title,
        value: id
    }))

    const managerChoices = employees.map(({id, first_name, last_name}) => ({
        name: `${first_name} ${last_name}`,
        value: id
    }))

    managerChoices.unshift({name: 'None', value: null})
    
    let answers = await inquirer.prompt([
        {
            type:'input',
            name:'first_name',
            message: 'What is employees first name?'
        },
        {
            type:'input',
            name:'last_name',
            message: 'What is employees last name?'
        },
        {
            type:'list',
            name:'role_id',
            message: 'What role is the employee?',
            choices: roleChoices
        },
        {
            type:'list',
            name:'manager_id',
            message: 'Who is the manager of the employee?',
            choices: managerChoices
        },
    ])

    await db.addEmployee(answers)
    console.log('Employee has been added successfully!!!!!😊😊')
    
    init() 
  }


  const allEmployees = () => {
     db.allEmployees().then(([data]) => {
        console.table(data)
     })
     init()
  }

  const employeeRole = () => {
    inquirer.prompt([
        {
            type:'choice',
            name:'ChangeRole',
            message: 'What is employees new role?',
            choices: [ 'Sales Lead','Salesperson','Lead Engineer', 'Software Engineer','Account Manager', 'Accountant', 'Legal Team Lead', 'Lawyer']
        }
    ])
    db.employeeRole().then(([data]) => {
        console.table(data)
    })
    init()
  }

  const allRoles = () => {
    db.allRoles().then(([data]) => {
        console.table(data)
    })
    init()
  }

  const addRole = () => {
    inquirer.prompt([
        {
            type:'input',
            name:'addRole',
            message:'What is the new role you would like to add?'
        },
        {
            type:'input',
            name:'addSalary',
            message:'What is the roles salary?'
        }
    ])
    db.addRole().then(([data]) => {
        console.table(data)
    })
    init()
  }

  const allDepartments = () => {
    db.allDepartments().then(([data]) => {
        console.table(data)
    })
    init()
  }

  const addDepartment = () => {
    inquirer.prompt([
        {
            type:'input',
            name:'addDepartment',
            message:'What is the new department you would like to add?'
        }
    ])
    db.addDepartment().then(([data]) => {
        console.table(data)
    })
    init()
  }

  init();