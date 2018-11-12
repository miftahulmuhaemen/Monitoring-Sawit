"use strict"

var response = require('./response')

class BaseController{

  get services(){
    return {}
  }

  setResponse(error_message,data,res){

    if(error_message)
      response.err_500(error_message,res)
    else {
      if(Array.isArray(data) && data.length == 0)
          response.not_found(res)
      else {
        response.ok(data,res)
      }
    }
  }

}

module.exports = BaseController
