App.Views = App.Views || {};

(function () {
    'use strict';
    App.Views.BaseModalView = App.Views.BaseView.extend({
        className: 'modal fade',
        template: Handlebars.compile($('#ModalView').html()),
        closeButton: false,
        title: 'Header',
        body: Handlebars.compile($('#ModalBodyView').html()),
        footer: Handlebars.compile($('#ModalFooterView').html()),
        events: {
            'click .js-close-btn': 'hide',
            'click .js-save-btn': 'save'
        },
        initialize: function () {
            console.log('hi');
            App.Views.BaseView.prototype.initialize.apply(this, arguments);
            this.$el.on('hidden.bs.modal', this.remove.bind(this));
            if (this.model) {
                this.listenTo(this.model, 'change', this.render);
            }
            if (this.collection) {
                this.listenTo(this.collection, 'change', this.render);
            }
            this.render();
        },
        render: function () {
            this.renderContainer()
                .renderBody()
                .renderFooter();
            return this;
        },
        renderContainer: function () {
            this.$el.html(this.template({
                closeButton: this.closeButton,
                title: this.title,
            }));
            return this;
        },
        renderBody: function () {
            this.$('.modal-body').html(this.body({
                model: ((this.model) ? this.model.toJSON() : null),
                collection: ((this.collection) ? this.collection.toJSON(): null)
            }));
            return this;
        },
        renderFooter: function () {
            this.$('.modal-footer').html(this.footer);
            return this;
        },
        remove: function () {
            this.$el.off('hidden.bs.modal');
            this.$el.remove();
            this.stopListening();
            return this;
        },
        show: function () {
            this.$el.modal('show');
        },
        hide: function () {
            this.$el.modal('hide');
        },
        save: function () {
            console.log('save', this.model || this.collection);
            this.hide();
        }
    });
})();
