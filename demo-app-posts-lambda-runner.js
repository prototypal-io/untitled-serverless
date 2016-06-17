const lambdaHandler = require('./demo-app-posts-lambda-handler');

var event = {
  headers: {}
};
var context = {};
function cb(error, data){
  if(error){
    console.log("got error-------");
    console.log(error);
    return;
  }
  console.log("got data-------");
  console.log(data);
}

lambdaHandler.handler(event, context, cb);
