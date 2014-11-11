App.Routers = App.Routers || {};

(function(){
    'use strict';
    var $container = $('.view-container'),
        TabView = (function () {
            return new App.Views.BaseTab();
        })(),
        Router = Backbone.Router.extend({
            routes: {
                ''      : 'index',
                'form'  : 'form',
                'list'  : 'list',
                'modal' : 'modal'
            },
            initialize : function () {
                Backbone.history.start();
            },
            index: function() {
                this.modal();
            },
            form: function () {
                TabView.show('form');
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
