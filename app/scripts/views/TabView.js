App.Views = App.Views || {};

(function () {
    'use strict';
    App.Views.TabView = App.Views.BaseView.extend({
        el: '.view-container',
        template: App.Templates.Tab,
        show: function (view) {
            this.removeSubviews().render().tab(view);
        },
        tab: function (view) {
            this.$('a[href="#' + view + '"]').tab('show');
            var content = this.$('.tab-content .tab-pane.active');
            switch (view) {
            case 'modal':
                var ModalRow = App.Views.ListRowView.extend({
                        template: App.Templates.ButtonRow
                    }),
                    modalButtonCollection = new App.Collections.TestCollection([
                        new App.Models.TestModel({title: 'Base Modal', description: 'base'}),
                        new App.Models.TestModel({title: 'Model Modal', description: 'model'}),
                        new App.Models.TestModel({title: 'Collection Modal', description: 'collection'}),
                        new App.Models.TestModel({title: 'Custom Modal', description: 'custom'}),
                        new App.Models.TestModel({title: 'Event Modal', description: 'event'}),
                        new App.Models.TestModel({title: 'Callback Modal', description: 'callback'}),
                        new App.Models.TestModel({title: 'Selection Modal', description: 'selection'}),
                    ]),
                    ModalList = App.Views.ListView.extend({
                        el: content,
                        template: Handlebars.compile('<div class="list-body"></div>'),
                    }),
                    modalList = new ModalList({
                        collection: modalButtonCollection,
                        rowView: ModalRow
                    });
                this.addSubview(modalList);
                modalList.render();
                break;
            case 'list':
                var ListRow = App.Views.ListRowView.extend({
                        template: App.Templates.ButtonRow
                    }),
                    listButtonCollection = new App.Collections.TestCollection([
                        new App.Models.TestModel({title: 'List View', description: 'baseList'}),
                        new App.Models.TestModel({title: 'List View Events', description: 'eventList'})
                    ]),
                    ListOfLists = App.Views.ListView.extend({
                        el: content,
                        template: App.Templates.TabList,
                        events: {
                            'click #baseList': 'baseList',
                            'click #eventList': 'eventList'
                        },
                        baseList: function () {
                            var list = new App.Views.ListView({
                                collection: this.createTestCollection()
                            });
                            list.render();
                        },
                        eventList: function () {
                            App.Views.EventListRowView = App.Views.ListRowView.extend({
                                template: App.Templates.ListRowEvents,
                                events: {
                                    'click .btn': 'alertMsg'
                                },
                                alertMsg: function () {
                                    window.alert('Model cid: ' + this.model.cid);
                                }
                            });
                            var list = new App.Views.ListView({
                                collection: this.createTestCollection(),
                                rowView: App.Views.EventListRowView
                            });
                            list.render();
                        },
                        createTestCollection: function () {
                            return new App.Collections.TestCollection([
                                new App.Models.TestModel({}),
                                new App.Models.TestModel({title: 'Second model'}),
                                new App.Models.TestModel({title: 'Third model', description: 'Different description'})
                            ]);
                        }
                    }),
                    listOfLists = new ListOfLists({
                        collection: listButtonCollection,
                        rowView: ListRow
                    });
                this.addSubview(listOfLists);
                listOfLists.render();
                break;
            }
            bindEvents();
            return this;
        }
    });
})();
