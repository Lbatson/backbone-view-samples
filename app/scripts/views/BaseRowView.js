App.Views = App.Views || {};

(function () {
    'use strict';
    App.Views.BaseRow = App.Views.Base.extend({
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
