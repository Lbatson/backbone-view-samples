App.Views = App.Views || {};

(function () {
    'use strict';
    App.Views.ListView = App.Views.BaseView.extend({
      el: '.listDisplay',
      headerTitle: 'My List',
      template: Handlebars.compile($('#ListView').html()),
      initialize: function () {
        App.Views.BaseView.prototype.initialize.apply(this, arguments);
        this.rowView = this.options.rowView || App.Views.ListRowView;
        if (this.collection) {
          this.listenTo(this.collection, 'add', this.renderRow);
          this.listenTo(this.collection, 'remove', this.removeRow);
        }
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
        this.collection.add(model);
      },
      addInitialRows: function(){
        this.collection.each(function(model){
          this.renderRow(model);
        },this);
      },
      renderRow:function(model){
        console.log('model', model);
        var newRow = new this.rowView({model:model});
        this.subviews.push(newRow);
        this.$('.list-body').append(newRow.render().el);
      },
      removeRow:function (model) {
        
      }
    })
})();
