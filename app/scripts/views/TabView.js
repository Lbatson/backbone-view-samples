App.Views = App.Views || {};

(function () {
    'use strict';
    App.Views.TabView = App.Views.BaseView.extend({
        el: '.view-container',
        template: App.Templates.Tab,
        show: function (view) {
            this.render().tab(view);
        },
        tab: function (view) {
            this.$('a[href="#' + view + '"]').tab('show');
            var content = this.$('.tab-content .tab-pane.active');
            switch (view) {
            case 'modal':
                content.html(App.Templates.TabModal());
                break;
            case 'list':
                content.html(App.Templates.TabList());
                break;
            }
            bindEvents();
            return this;
        }
    });
})();
