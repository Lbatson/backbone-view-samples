App.Routers = App.Routers || {};

(function(){
    var $container = $('.view-container'),
        TabView = (function () {
            return new App.Views.TabView();
        })(),
        router = Backbone.Router.extend({
            routes: {
                ''      : 'index',
                'list'  : 'list',
                'modal' : 'modal',
                'tests' : 'tests'
            },
            initialize : function (){
                Backbone.history.start();
            },
            index: function(){
                this.modal();
            },
            list: function () {
                $container.empty();
                TabView.reset().show('list');
            },
            modal: function () {
                TabView.reset().show('modal');
            },
            tests: function(){
                $container.empty();
                $container.html(Handlebars.compile($('#TestView').html()));
            }
        });
    App.Routers.MainRouter = new router();
})();
