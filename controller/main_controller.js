'use strict'
var BaseController = require('../library/BaseController')
var main_models = require('../models/main_models')

class MainController extends BaseController {
  get services(){
    return {
      'GET' : 'ambil_semua',
      'GET /:id' : 'ambil_satu',
      'POST' : 'tambah_data'
      // 'PUT /:id' : 'ubah_data',
      // 'DELETE /:id' : 'hapus_data'
    }
  }

  ambil_semua(req,res,next){
    var model = new main_models()
    var controller = this

    model.findAll(function (err,rows){
      controller.setResponse(err,rows,res)
    })
  }

  ambil_satu(req,res,next){
    var model = new main_models()
    var controller = this
    var id = req.params.id

    if(!id)
      this.setResponse("Parameter ID wajib dikirim", null, res)

    model.findOne(function (err,rows){
      controller.setResponse(err,rows,res)
    })
  }

  tambah_data(req,res,next){
    var model = new main_models()
    var controller = this

    if(!req.body.Date)
      this.setResponse("Parameter nama wajib diisi", null, res)

    model.insertOne({
      date : req.body.Date,
      time : req.body.Time,
      carbondiokside : req.body.CarbonDiokside,
      humadity : req.body.Humadity,
      temperatur : req.body.Temperatur
    }, function (err,rows){
      controller.setResponse(err,rows,res)
    })
  }

  // ubah_data(req,res,next){
  //   var model = new modelProdi()
  //   var controller = this
  //   var id = req.params.id
  //   var nama = req.body.nama
  //
  //   model.updateOne(id, nama, function (err,rows){
  //     controller.setResponse(err,rows,res)
  //   })
  // }
  //
  // hapus_data(req,res,next){
  //   var model = new modelProdi()
  //   var controller = this
  //   var id = req.params.id
  //
  //   console.log(res);
  //
  //   model.deleteOne(id, function (err,rows){
  //     controller.setResponse(err,rows,res)
  //   })
  // }
}

module.exports = MainController
