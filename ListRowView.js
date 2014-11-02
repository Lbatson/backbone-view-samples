App.Views = App.Views || {};

(function () {
    'use strict';
    App.Views.BaseListRowView = App.Views.BaseListView.extend({
      className: '.list-body',
      templateRow: Handlebars.compile($('#ListRow').html()),
      initialize: function () {
          App.Views.BaseView.prototype.initialize.apply(this, arguments);
      },
      render: function(){
        this.renderRow();
        return this;
      },
      renderRow: function(){
        $(this.className).append(this.templateRow({
            model:this.model
          }));
      }
    })
})();
