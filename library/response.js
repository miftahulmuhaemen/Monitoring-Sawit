'use strict'
var response = {}

response.ok = function (value,res) {

  var data = {
    'status' : 200,
    'data' : value
  }

  res.json(data)
  res.end()
}

response.not_found = function (res) {
  var data = {
    'status' : 404,
    'message' : "Data Not Found mofo!",
    'data' : null
  }

  res.status(404)
  res.json(data)
  res.end()
}

response.err_500 = function (message,res) {

  var data = {
    'status' : 500,
    'message' : message
  }

  res.status(500)
  res.json(data)
  res.end()
}

module.exports = response;
