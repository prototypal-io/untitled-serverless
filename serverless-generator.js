
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
  console.log(`copying template ${template}`)
  var destination = templateDestinationPath(route,template);
  var source = `serverless-templates/${template}`;
  fs.createReadStream(source).pipe(fs.createWriteStream(destination));
}

function copyTemplates(route){
  copyTemplate(route,'handler.js');
  copyTemplate(route,'s-templates.yaml');
  copyTemplate(route,'lambda-utils.js');
}

function updateSFunction(route){
  var readPath = `serverless-templates/s-function.json`
  var writePath = templateDestinationPath(route, 's-function.json');
  var contents = fs.readFileSync(readPath, {encoding:"utf8"});
  contents = contents.replace(/{{module}}/g,route.module);
  contents = contents.replace(/{{method}}/g,route.method);
  contents = contents.replace(/{{url}}/g,route.url);
  fs.writeFileSync(writePath,contents);
}

function copyModule(route){
  var destination = templateDestinationPath(route,'endpoint-logic.js');
  var source = `${route.module}.js`;
  fs.createReadStream(source).pipe(fs.createWriteStream(destination));
}

module.exports.generateRoute = function(route){
  console.log('in generateRoute -----------');
  console.log(route);
  console.log('-------------------');

  preflight(route);
  copyTemplates(route);
  updateSFunction(route);
  copyModule(route);
}
