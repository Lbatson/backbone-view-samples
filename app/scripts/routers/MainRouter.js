App.Routers = App.Routers || {};

(function(){
    'use strict';
    var $container = $('.view-container'),
        TabView = (function () {
            return new App.Views.TabView();
        })(),
        Router = Backbone.Router.extend({
            routes: {
                ''      : 'index',
                'list'  : 'list',
                'modal' : 'modal'
            },
            initialize : function (){
                Backbone.history.start();
            },
            index: function(){
                this.modal();
            },
            list: function () {
                TabView.show('list');
            },
            modal: function () {
                TabView.show('modal');
            }
        });
    App.Routers.MainRouter = new Router();
})();
