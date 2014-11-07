App.Routers = App.Routers || {};

(function(){
    var $container = $('.view-container'),
        router = Backbone.Router.extend({
            routes: {
                ''      : 'index',
                'tests' : 'tests'
            },
            initialize : function (){
                Backbone.history.start();
            },
            index: function(){
                $container.empty();
                $container.html(Handlebars.compile($('#MainView').html()));
                bindEvents();
            },
            tests: function(){
                $container.empty();
                $container.html(Handlebars.compile($('#TestView').html()));
            }
        });
    App.Routers.MainRouter = new router();
})();
