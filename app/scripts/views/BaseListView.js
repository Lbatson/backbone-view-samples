App.Views.List = App.Views.List || {};

(function () {
    'use strict';
    App.Views.List.Base = App.Views.Base.extend({
        el: '.listDisplay',
        headerTitle: 'List View',
        template: App.Templates.List,
        init: function () {
            this.rowView = this.options.rowView || App.Views.Row.Base;
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
