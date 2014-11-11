App.Models = App.Models || {};
App.Collections = App.Collections || {};

(function () {
    'use strict';
    App.Models.BaseModel = Backbone.Model.extend({
        defaults: {
            title: 'Test Model',
            description: 'This is a test model'
        },
        capture: function () {
            this._original = _.clone(this.attributes, true);
            this.trigger('capture');
        },
        revert: function () {
            if (this._original) {
                this.set(_.clone(this._original, true));
                this.trigger('revert');
            }
        }
    });

    App.Collections.TestCollection = Backbone.Collection.extend({
        model: App.Models.BaseModel
    });
})();
