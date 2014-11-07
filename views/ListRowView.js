App.Views = App.Views || {};

(function () {
    'use strict';
    App.Views.ListRowView = App.Views.BaseView.extend({
        className: 'list-row',
        template: Handlebars.compile($('#ListRow').html()),
        render: function(){
            this.$el.html(this.template({
                model: (this.model ? this.model.toJSON() : null)
            }));
            return this;
        }
    });
})();
