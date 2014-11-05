App.Views = App.Views || {};

(function () {
    'use strict';
    App.Views.BaseListView = App.Views.BaseView.extend({
        el: '.list',
        title: 'My List',
        template: Handlebars.compile($('#ListView').html()),
        render: function(){
            this.$el.html(this.template({
                title: this.title,
            }));
            return this;
        }
    });
})();
