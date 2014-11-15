App.Views = App.Views || {};

(function () {
    'use strict';
    App.Views.BaseModal = App.Views.Base.extend({
        className: 'modal fade',
        template: App.Templates.Modal,
        closeButton: false,
        title: 'Header',
        body: App.Templates.ModalBody,
        footer: App.Templates.ModalFooter,
        events: {
            'click .js-close-btn': 'hide',
            'click .js-save-btn': 'save'
        },
        init: function () {
            this.$el.on('hidden.bs.modal', this.remove.bind(this));
            if (this.model) {
                this.listenTo(this.model, 'change', this.render);
            }
            if (this.collection) {
                this.listenTo(this.collection, 'change', this.render);
            }
            this.render();
        },
        destroy: function () {
            this.$el.off('hidden.bs.modal');
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
