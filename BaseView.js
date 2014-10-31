App.Views = App.Views || {};

(function () {
    'use strict';
    App.Views.BaseView = Backbone.View.extend({
        initialize: function (options) {
            this.options = _.defaults(options || {}, this.options);
            this.el = this.options.el || this.el;
        },
        render: function () {
            this.$el.html(this.template(this.options));
            return this;
        }
    });
})();
