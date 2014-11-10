window.App = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        'use strict';
        console.log('Hello from Backbone!');
    }
};

function modelModal () {
    'use strict';
    console.log('model');
    // pass model to modal
    var test = new App.Models.TestModel();
    var modal = new App.Views.BaseModalView({
        model: test
    });
    modal.show();
}

function collectionModal () {
    'use strict';
    console.log('collection');
    // pass collection to modal
    var tests = new App.Collections.TestCollection([
        new App.Models.TestModel(),
        new App.Models.TestModel({title: 'Second model'}),
        new App.Models.TestModel({title: 'Third model', description: 'Different description'}),
    ]);
    var modal = new App.Views.BaseModalView({
        collection: tests
    });
    modal.show();
}

function customModal () {
    'use strict';
    console.log('custom');
    // extend modal to change default properties
    App.Views.CustomModalView = App.Views.BaseModalView.extend({
        closeButton: true,
        title: 'Custom Header Title',
        body: Handlebars.compile('<h5>Custom Body Content</h5>'),
        renderFooter: function() {
            this.$('.modal-footer').html('override renderFooter');
            return this;
        }
    });
    var modal = new App.Views.CustomModalView();
    modal.show();
}

function eventModal () {
    'use strict';
    console.log('event');
    // pass different events. default events will be overriden
    App.Views.EventsModalView = App.Views.BaseModalView.extend({
        events: {
            'click .js-close-btn': 'hide',
            'click .js-save-btn': 'alertMsg'
        },
        alertMsg: function () {
            window.alert('event modal');
        }
    });
    var modal = new App.Views.EventsModalView();
    modal.show();
}

// function callbackModal () {
//     'use strict';
//     console.log('callback');
//     // callback function to access modal view info
//     var test = function (val) {
//         console.log('callback', val);
//     };
//     App.Views.CallbackModalView = App.Views.BaseModalView.extend({
//         save: function () {
//             this.hide();
//             // run callback after modal is hidden
//             this.$el.on('hidden.bs.modal', function() {
//                 test(this.$el);
//                 this.remove();
//             }.bind(this));
//             // or if you don't need to wait until hidden, just run callback
//             // test(this.$el);
//         }
//     });
//     var modal = new App.Views.CallbackModalView();
//     modal.show();
// }

function selectionModal () {
    'use strict';
    var selectedId,
        tests = new App.Collections.TestCollection([
            new App.Models.TestModel({id: 1}),
            new App.Models.TestModel({id: 2, title: 'Second model'}),
            new App.Models.TestModel({id: 3, title: 'Third model', description: 'Different description'}),
        ]);
    App.Views.SelectionModalView = App.Views.BaseModalView.extend({
        body: App.Templates.ModalSelect,
        save: function () {
            this.hide();
            this.$el.on('hidden.bs.modal', function() {
                selectedId = parseInt(this.$('.js-test-form input[name=testRadio]:checked').val(), 10);
                console.log('selected model', tests.get(selectedId));
                this.remove();
            }.bind(this));
        }
    });
    var modal = new App.Views.SelectionModalView({
        collection: tests
    });
    modal.show();
}

 function bindEvents(){
    'use strict';
    $('.btn-modal').on('click', function() {
        var id = $(this).attr('id');
        switch (id) {
        case 'base':
            // baseModal();
            break;
        case 'model':
            modelModal();
            break;
        case 'collection':
            collectionModal();
            break;
        case 'custom':
            customModal();
            break;
        case 'event':
            eventModal();
            break;
        case 'callback':
            // callbackModal();
            break;
        case 'selection':
            selectionModal();
            break;
        }
    });
}

(function () {
    'use strict';
    App.Views.Modal = App.Views.Modal || {};
    App.Views.Modal.Base = function () {
        console.log(this);
        var modal = new App.Views.BaseModalView();
        modal.show();
    };
})();

(function () {
    'use strict';
    App.Views.Modal = App.Views.Modal || {};
    App.Views.Modal.Callback = function () {
        // callback function to access modal view info
        // var test = function (val) {
        //     console.log('callback', val);
        // };
        var parent = this;
        App.Views.CallbackModalView = App.Views.BaseModalView.extend({
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
        var modal = new App.Views.CallbackModalView();
        modal.show();
    };
})();

$(function () {
    'use strict';
    App.init();
});
