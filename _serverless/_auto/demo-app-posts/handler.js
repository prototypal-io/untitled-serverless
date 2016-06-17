const lambdaUtils = require('./lambda-utils');

const endpointLogic = require('./endpoint-logic');

module.exports.handler = function(event, context, cb) {
  console.log('got event');
  console.log(JSON.stringify(event,null,'\t'));
  var req = lambdaUtils.buildRequest(event,context,cb);
  var res = lambdaUtils.buildResponse(event,context,cb);
  endpointLogic.index(req, res);
};

