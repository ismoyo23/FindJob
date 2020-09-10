let mysql = require('mysql')

let config = require('../config/global')
let conn = mysql.createConnection({
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database
})


module.exports = conn;