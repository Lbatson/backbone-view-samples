App.Views = App.Views || {};

(function () {
    'use strict';
    App.Views.BaseListView = App.Views.BaseView.extend({
      el: '.list',
      title: 'My List',
      template: Handlebars.compile($('#ListView').html()),
      initialize: function () {
          App.Views.BaseView.prototype.initialize.apply(this, arguments);
      },
      render: function(){
        console.log(this );
        console.log(this.$el);
        this.$el.html(this.template({
            title: this.title,
          }));
        return this;
      }
    })
  })();
