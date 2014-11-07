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
                TabView.show('list');
            },
            modal: function () {
                $container.empty();
                TabView.show('modal');
            },
            tests: function(){
                $container.empty();
                $container.html(Handlebars.compile($('#TestView').html()));
                mocha.setup('bdd');
                runTests();
                mocha.checkLeaks();
                mocha.globals(['jQuery']);
                mocha.run();
            }
        });
    App.Routers.MainRouter = new router();
})();
