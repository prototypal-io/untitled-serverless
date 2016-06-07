function Router() {

}

Router.prototype.loadRoutes = function(server){

  server.routes(function() {
    this.get('/posts', {from: 'demo-app-posts', with: 'index'});
  });

}

module.exports = Router;
