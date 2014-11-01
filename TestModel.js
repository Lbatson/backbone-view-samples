App.Models = App.Models || {};
App.Collections = App.Collections || {};

(function () {
    'use strict';
    App.Models.TestModel = Backbone.Model.extend({
        defaults: {
            title: 'Test Model',
            description: 'This is a test model',
            buttonName: "Row <number>"
        }
    });

    App.Collections.TestCollection = Backbone.Collection.extend({
        model: App.Models.TestModel
    });
})();
