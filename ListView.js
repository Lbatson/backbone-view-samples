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
          this.rowView = (this.options.rowView ||App.Views.BaseListRowView);
      },
      render: function(){
        this.renderBody();
        this.addInitialRows();
        return this;
      },
      renderBody: function(){
        this.$el.html(this.template({
            headerTitle: this.headerTitle
          }));
      },
      add: function (model) {
        //todo:add new collection or add new model
        //look into the underscore method collection.add(models,[options])
        //so..listen to things being added to a collectin and fire an event

        //add some sort of rowView array so you can call remove on all when ended
        //
        var newRow;
        newRow = new this.rowView({model:model});
        $(this.className).append(newRow.render().el);
      },
      addInitialRows: function(){
        this.collection.each(function(model){
          this.add(model);
        },this);
      }
    })
})();
