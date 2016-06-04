var Server = require('./server');
var Router = require('./demo-router');

var util = require('util');

var server = new Server();
var router = new Router();

router.loadRoutes(server);

server.start(3000);

console.dir(server.toJSON(), {depth: null, colors: true});
