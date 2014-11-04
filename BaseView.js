App.Views = App.Views || {};

(function () {
    'use strict';
    App.Views.BaseView = Backbone.View.extend({
        addSubview: function (view) {
            this._subviews[view.cid] = view;
            if (view.model) {
                this._indexByModel[view.model.cid] = view.cid;
            }
        },
        cleanup: function () {
            // stub to do addtional removal tasks
        },
        findSubviewById: function (cid) {
            return this._subviews[cid];
        },
        findSubviewByModel: function (model) {
            return this.findSubviewById(this._indexByModel[model.cid])
        },
        initialize: function (options) {
            this.options = _.defaults(options || {}, this.options);
            this.el = this.options.el || this.el;
            this._subviews = {};
            this._indexByModel = {};
        },
        render: function () {
            this.$el.html(this.template(this.options));
            return this;
        },
        remove: function () {
            _.each(this._subviews, function (view) {
                this.removeSubview(view);
            }, this);
            this.cleanup();
            this.$el.remove();
            this.stopListening();
            return this;
        },
        removeSubview: function (view) {
            view.remove();
            if (view.model) {
                delete this._indexByModel[view.model.cid];
            }
            delete this._subviews[view.cid];
        }
    });
})();
