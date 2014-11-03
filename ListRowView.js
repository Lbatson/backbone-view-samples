App.Views = App.Views || {};

(function () {
    'use strict';
    App.Views.ListRowView = App.Views.BaseView.extend({
      className: 'list-row',
      tagName: 'div',
      templateRow: Handlebars.compile($('#ListRow').html()),
      initialize: function () {
          App.Views.BaseView.prototype.initialize.apply(this, arguments);
      },
      render: function(){
        this.$el.html(this.templateRow({
          model: this.model.toJSON()
        }));
        return this;
      }
    })
})();
