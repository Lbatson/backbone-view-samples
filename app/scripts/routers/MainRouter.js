App.Routers = App.Routers || {};
App.Views = App.Views || {};

(function(){
    'use strict';
    var $container = $('.view-container'),
        Active = null,
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
            execute: function (callback, args) {
                if (Active) {
                    Active.remove();
                }
                if (callback) {
                    callback.apply(this, args);
                }
            },
            presentTab: function (tab) {
                Active = TabView;
                $container.append(TabView.show(tab).el);
            },
            // Routes
            index: function() {
                this.modal();
            },
            form: function () {
                this.presentTab('form');
            },
            list: function () {
                this.presentTab('list');
            },
            modal: function () {
                this.presentTab('modal');
            }
        });
    App.Routers.MainRouter = new Router();
})();
