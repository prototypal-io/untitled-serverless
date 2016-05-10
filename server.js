var http = require('http');
var RouteRecognizer = require('route-recognizer');

global.self = {
  FakeXMLHttpRequest: function() {},
  RouteRecognizer: RouteRecognizer
};
function FakeElement(tagName) {
  this.tagName = tagName;
}
global.document = {
  createElement: function(tagName) {
    return new FakeElement(tagName);
  }
};

var Pretender = require('pretender');

var pretenderServer = new Pretender(function() {
  this.get('/omg', function(req) {
    return [200, {'Content-Type': 'application/json'}, JSON.stringify({hello: 'world'})];
  });
});

function PretenderRequest(method, url) {
  this.method = method;
  this.url = url;
}
PretenderRequest.prototype = {
  method: null,
  url: null,
  
  respond: function(status, headers, body) {},
  _progress: function() {},
  upload: {
    _progress: function() {}
  }
};

var server = http.createServer(function(request, response) {
  var pretenderRequest = new PretenderRequest(request.method, request.url);
  var pretenderResponse = pretenderServer.handleRequest(pretenderRequest);
  pretenderRequest.respond = function(status, headers, body) {
    response.statusCode = status;
    Object.keys(headers).forEach(function(header) {
      response.setHeader(header, headers[header]);
    });
    response.end(body);
  };
});

server.listen(3000);