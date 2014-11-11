App.Views.Tab = App.Views.Tab || {};

(function () {
    'use strict';
    App.Views.Tab.Base = App.Views.Base.extend({
        el: '.view-container',
        template: App.Templates.Tab,
        show: function (view) {
            this.removeSubviews().render().tab(view);
        },
        tab: function (view) {
            this.$('a[href="#' + view + '"]').tab('show');
            var target = this.$('.tab-content .tab-pane.active');
            switch (view) {
            case 'modal':
                App.Controllers.ModalTab(target, this);
                break;
            case 'list':
                App.Controllers.ListTab(target, this);
                break;
            }
            return this;
        }
    });
})();
