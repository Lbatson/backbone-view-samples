App.Views.Row = App.Views.Row || {};

(function () {
    'use strict';
    App.Views.Row.Base = App.Views.Base.extend({
        className: 'list-row',
        template: App.Templates.ListRow,
        render: function(){
            this.$el.html(this.template({
                model: (this.model ? this.model.toJSON() : null)
            }));
            return this;
        }
    });
})();
