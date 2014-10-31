App.Views = App.Views || {};

(function () {
    'use strict';
    App.Views.BaseModalView = App.Views.BaseView.extend({
      className: 'list',
      title: 'My List',
      template: Handlebars.compile($('#ListView').html()),
    },
    initialize: function () {
        App.Views.BaseView.prototype.initialize.apply(this, arguments);
        this.render();
    },
    render: function(){
      this.$el.html(this.template({
          title: this.title,
      }));
      return this;
    }
    )
})
