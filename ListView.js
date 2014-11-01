App.Views = App.Views || {};

(function () {
    'use strict';
    App.Views.BaseListView = App.Views.BaseView.extend({
      el: '.list',
      headerTitle: 'My List',
      template: Handlebars.compile($('#ListView').html()),
      templateRow: Handlebars.compile($('#ListRow').html()),
      initialize: function () {
          App.Views.BaseView.prototype.initialize.apply(this, arguments);
      },
      render: function(){
        this.renderBody();
        this.renderRows();
        return this;
      },
      renderBody: function(){
        this.$el.html(this.template({
            headerTitle: this.headerTitle
          }));
      },
      renderRows: function(){
        var collection = this.collection ? this.collection.toJSON(): null,
            newRow = {};
        _.each(collection, function(model){
          newRow = this.listRow(model);
          newRow.render();
        }, this);
      },
      listRow: function(model){
        return new App.Views.BaseListRowView({model:model})},
    })
})();
