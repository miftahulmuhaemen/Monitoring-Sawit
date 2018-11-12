var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'remotemysql.com',
    port:3306,
    user: '1pd7O3aHgB',
    password: 'JvImBwqJwl',
    database: '1pd7O3aHgB'
});

connection.connect(function (err) {
    if(err) throw err;
});



module.exports = connection;
