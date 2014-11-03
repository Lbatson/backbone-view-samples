App.Views = App.Views || {};

(function () {
    'use strict';
    App.Views.BaseListRowView = App.Views.BaseView.extend({
      className: '.list-body',
      tagName: 'div',
      templateRow: Handlebars.compile($('#ListRow').html()),
      initialize: function () {
          App.Views.BaseView.prototype.initialize.apply(this, arguments);
      },
      events:{
        'click .dsc': 'alertMsg'
      },
      render: function(){
        this.$el.html(this.templateRow({
                model:this.model.toJSON()
              }));
        return this;
      },
      alertMsg: function(){
        alert('a TEST');
      }
    })
})();
