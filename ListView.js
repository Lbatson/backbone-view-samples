App.Views = App.Views || {};

(function () {
    'use strict';
    App.Views.BaseListView = App.Views.BaseView.extend({
      el: '.listDisplay',
      className: '.list-body',
      headerTitle: 'My List',
      template: Handlebars.compile($('#ListView').html()),
      templateRow: Handlebars.compile($('#ListRow').html()),
      initialize: function () {
          App.Views.BaseView.prototype.initialize.apply(this, arguments);
      },
      render: function(){
        var newRow;
        this.renderBody();
        this.collection.each(function(model){
          newRow = new App.Views.BaseListRowView({model:model});
          $(this.className).append(newRow.render());
        },this)
        return this;
      },
      renderBody: function(){
        this.$el.html(this.template({
            headerTitle: this.headerTitle
          }));
      },
    })
})();
