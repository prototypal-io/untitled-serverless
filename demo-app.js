var Server = require('./server');
var util = require('util');

var server = new Server();

server.routes(function() {
  this.get('/posts', {from: 'demo-app-posts', with: 'index'});
});

server.start(3000);

console.dir(server.toJSON(), {depth: null, colors: true});
