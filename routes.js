module.exports = function (app) {


  var registerControllerRoute = function(path,controllers){
    var route_services = controllers.services
    Object.keys(route_services).forEach(full_path => {
      var service_function = route_services[full_path]
      var path_items = full_path.split(' ')
      var verb = (path_items.length > 0 ? path_items[0] : "get").toLowerCase()
      var finalPath = path + (path_items.length > 1 ? path_items[1] : "")
      app[verb](finalPath,controllers[service_function].bind(controllers))

    })
  }

  var Controller = require("./controller/main_controller")
  registerControllerRoute('/api/', new Controller())

}
