const connect = require('./connection')

class db {
    constructor(connect) {
        this.connect = connect
    }
}














module.exports = new db(connect)