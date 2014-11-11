App.Controllers = App.Controllers || {};

(function () {
    'use strict';
    App.Controllers.ModalTab = function (target, parent) {
        var Row = App.Views.Row.Base.extend({
                template: App.Templates.ButtonRow
            }),
            collection = new App.Collections.TestCollection([
                new App.Models.TestModel({title: 'Base Modal', description: 'js-base-modal'}),
                new App.Models.TestModel({title: 'Model Modal', description: 'js-model-modal'}),
                new App.Models.TestModel({title: 'Collection Modal', description: 'js-collection-modal'}),
                new App.Models.TestModel({title: 'Custom Modal', description: 'js-custom-modal'}),
                new App.Models.TestModel({title: 'Event Modal', description: 'js-event-modal'}),
                new App.Models.TestModel({title: 'Callback Modal', description: 'js-callback-modal'}),
                new App.Models.TestModel({title: 'Selection Modal', description: 'js-selection-modal'}),
            ]),
            List = App.Views.List.Base.extend({
                el: target,
                template: Handlebars.compile('<div class="list-body"></div>'),
                events: {
                    'click .js-base-modal': 'baseModal',
                    'click .js-model-modal': 'modelModal',
                    'click .js-collection-modal': 'collectionModal',
                    'click .js-custom-modal': 'customModal',
                    'click .js-event-modal': 'eventModal',
                    'click .js-callback-modal': 'callbackModal',
                    'click .js-selection-modal': 'selectionModal'
                },
                baseModal: function () {
                    var modal = new App.Views.Modal.Base();
                    modal.show();
                },
                modelModal: function () {
                    console.log('base modal');
                    var test = new App.Models.TestModel();
                    var modal = new App.Views.Modal.Base({
                        model: test
                    });
                    modal.show();
                },
                collectionModal: function () {
                    console.log('collection modal');
                    // pass collection to modal
                    var tests = new App.Collections.TestCollection([
                        new App.Models.TestModel(),
                        new App.Models.TestModel({title: 'Second model'}),
                        new App.Models.TestModel({title: 'Third model', description: 'Different description'}),
                    ]);
                    var modal = new App.Views.Modal.Base({
                        collection: tests
                    });
                    modal.show();
                },
                customModal: function () {
                    console.log('custom modal');
                    // extend modal to change default properties
                    var CustomModal = App.Views.Modal.Base.extend({
                        closeButton: true,
                        title: 'Custom Header Title',
                        body: Handlebars.compile('<h5>Custom Body Content</h5>'),
                        renderFooter: function() {
                            this.$('.modal-footer').html('override renderFooter');
                            return this;
                        }
                    });
                    var modal = new CustomModal();
                    modal.show();
                },
                eventModal: function () {
                    console.log('event modal');
                    // pass different events. default events will be overriden
                    var EventModal = App.Views.Modal.Base.extend({
                        events: {
                            'click .js-close-btn': 'hide',
                            'click .js-save-btn': 'alertMsg'
                        },
                        alertMsg: function () {
                            window.alert('event modal');
                        }
                    });
                    var modal = new EventModal();
                    modal.show();
                },
                callbackModal: function () {
                    console.log('callback modal');
                    var parent = this;
                    var CallbackModal = App.Views.Modal.Base.extend({
                        save: function () {
                            this.hide();
                            // run callback after modal is hidden
                            this.$el.on('hidden.bs.modal', function() {
                                parent.test(this.$el);
                                this.remove();
                            }.bind(this));
                            // or if you don't need to wait until hidden, just run callback
                            // test(this.$el);
                        }
                    });
                    var modal = new CallbackModal();
                    modal.show();
                },
                selectionModal: function () {
                    console.log('selection modal');
                    var parent = this;
                    var selectedId,
                        tests = new App.Collections.TestCollection([
                            new App.Models.TestModel({id: 1}),
                            new App.Models.TestModel({id: 2, title: 'Second model'}),
                            new App.Models.TestModel({id: 3, title: 'Third model', description: 'Different description'}),
                        ]);
                    var SelectionModal = App.Views.Modal.Base.extend({
                        body: App.Templates.ModalBodySelect,
                        save: function () {
                            this.hide();
                            this.$el.on('hidden.bs.modal', function() {
                                selectedId = parseInt(this.$('.js-test-form input[name=testRadio]:checked').val(), 10);
                                parent.test(tests.get(selectedId));
                                this.remove();
                            }.bind(this));
                        }
                    });
                    var modal = new SelectionModal({
                        collection: tests
                    });
                    modal.show();
                },
                test: function (val) {
                    console.log('testing callback', val);
                }
            }),
            modalList = new List({
                collection: collection,
                rowView: Row
            });
        parent.addSubview(modalList);
        modalList.render();
    };
})();
