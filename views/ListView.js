App.Views = App.Views || {};

(function () {
    'use strict';
    App.Views.ListView = App.Views.BaseView.extend({
        el: '.listDisplay',
        headerTitle: 'List View',
        template: Handlebars.compile($('#ListView').html()),
        init: function () {
            this.rowView = this.options.rowView || App.Views.ListRowView;
            if (this.collection) {
                this.listenTo(this.collection, 'add', this.addRow);
                this.listenTo(this.collection, 'remove', this.removeRow);
            }
        },
        render: function () {
            this.$el.html(this.template({
                headerTitle: this.headerTitle
            }));
            this.collection.each(function(model){
                this.addRow(model);
            }, this);
            return this;
        },
        addRow: function (model) {
            var row = new this.rowView({model: model});
            this.addSubview(row);
            this.$('.list-body').append(row.render().el);
            return this;
        },
        removeRow: function (model) {
            this.removeSubview(null, model);
            return this;
        }
    });
})();
