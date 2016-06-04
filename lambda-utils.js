module.exports.buildRequest = function(event, context, cb) {
  var req = {};

  // http://expressjs.com/en/api.html#req
  // Properties
  req.app = null; // Not sure this applies in our context...
  req.baseUrl = event.baseUrl;
  req.body = event.body;
  req.cookies = {}; // TODO : Figure out how to get cookies from AWS Gateway
  req.fresh = true; // TODO : Does this apply in our context?
  req.hostname = event.headers.Host;
  //req.ip = event.headers["X-Forwarded-For"].split(", ")[0];
  req.ips = event.headers["X-Forwarded-For"];
  req.method = event.method;
  req.originalUrl = ""; // TODO : Figrure out how to reconstruct this
  req.params = event.params;
  req.path = event.baseUrl; // TODO : This isn't quite right...
  req.protocol = event.headers["X-Forwarded-Proto"];
  req.query = event.query;
  req.route = null; // TODO : Does this apply to us?
  req.secure = req.protocol === 'https';
  req.signedCookies = {}; // TODO : ???
  req.stale = false; // TODO : Does this apply in our context?
  req.subdomains = []; // TODO: Does this apply?
  req.xhr = event.headers["X-Requested-With"] === 'XMLHttpRequest';

  // Methods
  /*
  var accept = realAccepts(req);
  req.accepts = function accepts(types){
    // TODO : Fix me!
    return types;
    //return accept.type(types);
  };
  */
  req.acceptsCharsets = function acceptsCharsets(){
    // TODO : Fix me!
  };

  req.acceptsEncodings = function acceptsEncodings(){
    // TODO : Fix me!
  };

  req.acceptsLanguages = function acceptsLanguages(){
    // TODO : Fix me!
  };

  req.get = function get(field){
    return event.headers[field];
  }

  req.is = function is(type){
    // TODO: Fix me!
  }

  return req;
}

module.exports.buildResponse = function(event, context, cb) {
  var res = {};

  // Properties
  res.app = null; // TODO : Does this apply?
  res.headersSent = false; // TODO : Is this right?
  res.locals = {}; // TODO: Does this apply?

  res.headers = [];

  // Methods
  res.append = function append(field,value){
    res.headers.push([field,value]);
  }

  res.attachment = function attachment(){
    // TODO: Can we return attachments through API Gatewway?
  }

  res.cookie = function cookie(name, value, options){
    // TODO: Can we set cookies?
  }

  res.clearCookie = function clearCookie(name, options){
    // TODO: Can we set cookies?
  }

  res.download = function download(){
    // TODO: Can we do this?
  }

  res.end = function end(){
    // TODO: Implement me!
  }

  res.format = function format(){
    // TODO: does this apply?
  }

  res.get = function get(field){
    return headers[field];
  }

  res.json = function json(payload){
    cb(null, payload);
  }

  res.jsonp = function jsonp(){
    // TODO: Do we need to support josnp?
  }

  res.links = function links(){
    // TODO: Implement me!
  }

  res.location = function location(){
    // TODO: Implement me!
  }

  res.redirect = function redirect(){
    // TODO: Implement me!
  }

  res.render = function render(){
    // TODO: Does this apply?
  }

  res.send = function send(){
    // TODO: Does this apply?
  }

  res.sendFile = function sendFile(){
    // TODO: Does this apply?
  }

  res.sendStatus = function sendStatus(){
    // TODO: Implement me!
  }

  res.set = function set(){
    // TODO: Implement me!
  }

  res.status = function status(){
    // TODO: Implement me!
  }

  res.type = function type(){
    // TODO: Implement me!
  }

  res.vary = function vary(){
    // TODO: Implement me!
  }

  return res;
}

