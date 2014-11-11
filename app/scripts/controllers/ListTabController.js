App.Controllers = App.Controllers || {};

(function () {
    'use strict';
    App.Controllers.ListTab = function (target, parent) {
        var ListRow = App.Views.BaseRow.extend({
                template: App.Templates.ButtonRow
            }),
            listButtonCollection = new App.Collections.TestCollection([
                new App.Models.BaseModel({title: 'List View', description: 'js-base-list'}),
                new App.Models.BaseModel({title: 'List View Events', description: 'js-event-list'})
            ]),
            ListOfLists = App.Views.BaseList.extend({
                el: target,
                template: App.Templates.TabList,
                events: {
                    'click .js-base-list': 'baseList',
                    'click .js-event-list': 'eventList'
                },
                baseList: function () {
                    var list = new App.Views.BaseList({
                        collection: this.createTestCollection()
                    });
                    list.render();
                },
                eventList: function () {
                    var EventRow = App.Views.BaseRow.extend({
                        template: App.Templates.ListRowEvents,
                        events: {
                            'click .btn': 'alertMsg'
                        },
                        alertMsg: function () {
                            window.alert('Model cid: ' + this.model.cid);
                        }
                    });
                    var list = new App.Views.BaseList({
                        collection: this.createTestCollection(),
                        rowView: EventRow
                    });
                    list.render();
                },
                createTestCollection: function () {
                    return new App.Collections.TestCollection([
                        new App.Models.BaseModel({}),
                        new App.Models.BaseModel({title: 'Second model'}),
                        new App.Models.BaseModel({title: 'Third model', description: 'Different description'})
                    ]);
                }
            }),
            listOfLists = new ListOfLists({
                collection: listButtonCollection,
                rowView: ListRow
            });
        parent.addSubview(listOfLists);
        listOfLists.render();
    };
})();
