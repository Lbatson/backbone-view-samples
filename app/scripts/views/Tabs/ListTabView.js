(function () {
    'use strict';
    App.Views.ListTab = function (target) {
        var ListRow = App.Views.Row.Base.extend({
                template: App.Templates.ButtonRow
            }),
            listButtonCollection = new App.Collections.TestCollection([
                new App.Models.TestModel({title: 'List View', description: 'js-base-list'}),
                new App.Models.TestModel({title: 'List View Events', description: 'js-event-list'})
            ]),
            ListOfLists = App.Views.List.Base.extend({
                el: target,
                template: App.Templates.TabList,
                events: {
                    'click .js-base-list': 'baseList',
                    'click .js-event-list': 'eventList'
                },
                baseList: function () {
                    var list = new App.Views.List.Base({
                        collection: this.createTestCollection()
                    });
                    list.render();
                },
                eventList: function () {
                    var EventRow = App.Views.Row.Base.extend({
                        template: App.Templates.ListRowEvents,
                        events: {
                            'click .btn': 'alertMsg'
                        },
                        alertMsg: function () {
                            window.alert('Model cid: ' + this.model.cid);
                        }
                    });
                    var list = new App.Views.List.Base({
                        collection: this.createTestCollection(),
                        rowView: EventRow
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
    };
})();
