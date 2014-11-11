App.Controllers = App.Controllers || {};

(function () {
    'use strict';
    App.Controllers.FormTab = function (target, parent) {
        var BindForm = App.Views.BaseForm.extend({
            model: new App.Models.BaseModel(),
            bindings: {
                '#input01': 'title',
                '.title': 'title',
                '#input02': 'description',
                '.description': 'description'
            },
            events: {
                'click .js-revert-btn': 'revert'
            },
            revert: function (e) {
                e.preventDefault();
                this.model.revert();
            }
        });
        var form = new BindForm();
        parent.addSubview(form);
        target.html(form.render().el);
    };
})();
