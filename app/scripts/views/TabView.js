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
                var row = App.Views.ListRowView.extend({
                        template: App.Templates.TabRow
                    }),
                    collection = new App.Collections.TestCollection([
                        new App.Models.TestModel({title: 'Base Modal', description: 'base'}),
                        new App.Models.TestModel({title: 'Model Modal', description: 'model'}),
                        new App.Models.TestModel({title: 'Collection Modal', description: 'collection'}),
                        new App.Models.TestModel({title: 'Custom Modal', description: 'custom'}),
                        new App.Models.TestModel({title: 'Event Modal', description: 'event'}),
                        new App.Models.TestModel({title: 'Callback Modal', description: 'callback'}),
                        new App.Models.TestModel({title: 'Selection Modal', description: 'selection'}),
                    ]),
                    modalList = new App.Views.ListView({
                        el: content,
                        collection: collection,
                        rowView: row
                    });
                this.addSubview(modalList);
                modalList.render();
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
