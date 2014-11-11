App.Views.Form = App.Views.Form || {};

(function () {
    'use strict';
    App.Views.Form.Base = App.Views.Base.extend({
        className: 'form-horizontal',
        tagName: 'form',
        template: App.Templates.Form,
        init: function () {
            if (this.model) {
                this.model.capture();
            }
        },
        render: function () {
            this.$el.html(this.template);
            if (this.model && this.bindings) {
                this.stickit();
            }
            return this;
        }
    });
})();
