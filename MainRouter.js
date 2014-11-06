App.Routers = App.Routers || {};

(function(){
    var router = Backbone.Router.extend({
        routes: {
            ''      : 'index',
            'tests' : 'tests'
        },
        initialize : function (){
            Backbone.history.start();
        },
        index: function(){
            $('.view-container').empty();
            $('.view-container').html(Handlebars.compile($('#MainView').html()));
        },
        tests: function(){
            $('.view-container').empty();
            $('.view-container').html(Handlebars.compile($('#TestView').html()));
        }
    });
    App.Routers.MainRouter = new router();
})();
