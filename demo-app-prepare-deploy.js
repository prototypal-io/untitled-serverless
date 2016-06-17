var Server = require('./server');
var Router = require('./demo-router');
var ServerlessGenerator = require('./serverless-generator');

var util = require('util');

var server = new Server();
var router = new Router();

router.loadRoutes(server);

var routes = server.toJSON();

routes.routes.forEach(function(route){
  console.log('about to generate serverless function + endpiont');
  console.log(route);
  ServerlessGenerator.generateRoute(route);
});

console.log(routes)
