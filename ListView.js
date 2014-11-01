App.Views = App.Views || {};

(function () {
    'use strict';
    App.Views.BaseListView = App.Views.BaseView.extend({
      el: '.list',
      headerTitle: 'My List',
      template: Handlebars.compile($('#ListView').html()),
      initialize: function () {
          App.Views.BaseView.prototype.initialize.apply(this, arguments);
      },
      render: function(){
        this.$el.html(this.template({
            headerTitle: this.headerTitle,
            collection: this.collection ? this.collection.toJSON(): null
          }));
        return this;
      },
      renderBody: function(){

      },
      renderRow: function(){

      }
    })
})();
