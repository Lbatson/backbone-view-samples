App.Views = App.Views || {};

(function () {
    'use strict';
    App.Views.BaseListRowView = App.Views.BaseListView.extend({
      className: '.list-body',
      templateRow: Handlebars.compile($('#ListRow').html()),
      initialize: function () {
          App.Views.BaseView.prototype.initialize.apply(this, arguments);
      },
      events:{
        'click .dsc': 'alertMsg'
      },
      render: function(){
        return this.templateRow({
                model:this.model.toJSON()
              });
      },
      alertMsg: function(){
        alert('a TEST');
      }
    })
})();
