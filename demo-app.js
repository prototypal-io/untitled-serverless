var Server = require('./server');

var server = new Server();

server.routes(function() {
  this.get('/omg', function(req) {
    return [200, {'Content-Type': 'application/json'}, JSON.stringify({hello: 'world'})];
  });
  
  this.get('/', function(req) {
    return [200, {'Content-Type': 'application/json'}, JSON.stringify({hello: 'friend'})];
  });
});

server.start(3000);