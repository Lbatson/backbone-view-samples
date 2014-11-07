App.Views = App.Views || {};

(function () {
    'use strict';
    App.Views.TabView = App.Views.BaseView.extend({
        el: '.view-container',
        template: Handlebars.compile($('#TabView').html()),
        show: function (view) {
            this.render().tab(view);
        },
        tab: function (view) {
            this.$('a[href="#' + view + '"]').tab('show');
            var content = this.$('.tab-content .tab-pane.active');
            switch (view) {
                case 'modal':
                    content.html(Handlebars.compile($('#ModalViewTab').html()));
                    break;
                case 'list':
                    content.html(Handlebars.compile($('#ListViewTab').html()));
                    break;
            }
            bindEvents();
            return this;
        }
    });
})();
