App.Views = App.Views || {};

(function () {
    'use strict';
    App.Views.BaseView = Backbone.View.extend({
        subviews: [],
        initialize: function (options) {
            this.options = _.defaults(options || {}, this.options);
            this.el = this.options.el || this.el;
        },
        remove: function () {
            // _.each(subviews, function(subview) {
            //     subview.remove();
            // });
            this.$el.remove();
            this.stopListening();
            return this;
        },
        render: function () {
            this.$el.html(this.template(this.options));
            return this;
        }
    });
})();
