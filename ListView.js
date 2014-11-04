App.Views = App.Views || {};

(function () {
    'use strict';
    App.Views.ListView = App.Views.BaseView.extend({
        el: '.listDisplay',
        headerTitle: 'List View',
        template: Handlebars.compile($('#ListView').html()),
        initialize: function () {
            App.Views.BaseView.prototype.initialize.apply(this, arguments);
            this.rowView = this.options.rowView || App.Views.ListRowView;
            if (this.collection) {
                this.listenTo(this.collection, 'add', this.renderRow);
                this.listenTo(this.collection, 'remove', this.removeRow);
            }
        },
        render: function () {
            this.$el.html(this.template({
                headerTitle: this.headerTitle
            }));
            this.collection.each(function(model){
                this.renderRow(model);
            }, this);
            return this;
        },
        renderRow: function (model) {
            console.log('model', model);
            this.$('.list-body').append(new this.rowView({model: model}).render().el);
            return this;
        },
        removeRow: function (model) {
            console.log('removeRow model', model);
        }
    })
})();
