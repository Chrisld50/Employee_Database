const mysql = require('mysq12');

const connect = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'companylist_db'
    },
    console.log(`Connected to the companylist_db database.`)
  );

  db.connect(err =>{ if(err) throw err;})

  module.exports = connect;