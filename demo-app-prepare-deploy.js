var Server = require('./server');
var ServerlessGenerator = require('./serverless-generator');

var util = require('util');

var server = new Server();

server.routes(function() {
  this.get('/posts', {from: 'demo-app-posts', with: 'index'});
});

var routes = server.toJSON();

routes.routes.forEach(function(route){
  console.log('about to generate serverless function + endpiont');
  console.log(route);
  ServerlessGenerator.generateRoute(route);
});

console.log(routes)
