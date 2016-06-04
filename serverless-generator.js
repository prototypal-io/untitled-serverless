
const fs = require('fs');

function preflight(route){
  makeAutoDir();
  makeRouteDir(route);
}

function buildRoutePath(route){
  return `_serverless/_auto/${route.module}`;
}

function templateDestinationPath(route, template){
  return `${buildRoutePath(route)}/${template}`
}

function makeAutoDir(){
  try{
    fs.accessSync('_serverless/_auto');
  }catch(error){
    fs.mkdirSync(`_serverless/_auto`);
  }
}

function makeRouteDir(route){
  const routePath = buildRoutePath(route);
  try{
    fs.accessSync(routePath);
  }catch(error){
    fs.mkdirSync(routePath);
  }
}

function copyTemplate(route, template){
  var destination = templateDestinationPath(route,template);
  var source = `serverless-templates/${template}`;
  fs.createReadStream(source).pipe(fs.createWriteStream(destination));
}

function copyTemplates(route){
  copyTemplate(route,'handler.js');
  copyTemplate(route,'s-function.json');
  copyTemplate(route,'s-templates.yaml');
}


module.exports.generateRoute = function(route){
  console.log('in generateRoute -----------');
  console.log(route);
  console.log('-------------------');

  preflight(route);
  copyTemplates(route);
}
