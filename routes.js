App.Routers = App.Routers || {};
(function(){
  App.Routers.Route = Backbone.Router.extend({
    routes: {
      'tests' : 'openTests',
      'mainPage' : 'openMainPage'
    },
    initialize : function (){
      Backbone.history.start();
    },
    openTests: function(){
      $('.container').empty();
      $('.container').html(Handlebars.compile($('#TestView').html()));
    },
    openMainPage: function(){
      $('.container').empty();
      $('.container').html(Handlebars.compile($('#MainView').html()));
    }

  })
})()
