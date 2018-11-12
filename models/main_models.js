'use strict'

var connection = require('../library/connection')

class prodi {
  findAll(callback){
    connection.query('SELECT * FROM db_sawit ORDER BY id DESC', function (error,rows,fields) {
      var err_message = null;

      if(error)
        err_message = error.sqlMessage

      callback(err_message,rows)
    })
  }

  findOne(id,callback){
    connection.query('SELECT * FROM db_sawit WHERE id = ?', id, function(error, rows, fields) {

      var err_message = null;

      if(error)
        err_message = error.sqlMessage

      callback(err_message,rows)
    })
  }

  insertOne(data,callback){
    connection.query('INSERT INTO db_sawit SET ?',
      {
        date:data.date,
        time:data.time,
        carbondiokside:data.carbondiokside,
        humadity:data.humadity,
        temperatur:data.temperatur
      },
      function(error, result) {

      var err_message = null;

      if(error)
        err_message = error.sqlMessage

      callback(err_message,result)
    })
  }
}
module.exports = prodi;
