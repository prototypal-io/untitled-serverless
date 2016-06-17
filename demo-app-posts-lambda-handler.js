const lambdaUtils = require('./lambda-utils');

const endpointLogic = require('./demo-app-posts');

module.exports.handler = function(event, context, cb) {
  var req = lambdaUtils.buildRequest(event,context,cb);
  var res = lambdaUtils.buildResponse(event,context,cb);
  endpointLogic.index(req, res);
};
