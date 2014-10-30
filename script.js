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

function baseModal() {
    'use strict';
    console.log('base');
    // default modal
    var modal = new App.Views.BaseModalView();
    modal.show();
}

function modelModal() {
    'use strict';
    console.log('model');
    // pass model to modal
    var modal = new App.Views.BaseModalView({
        model: new App.Models.TestModel()
    });
    modal.show();
}

function collectionModal() {
    'use strict';
    console.log('collection');
    // pass collection to modal
    var tests = new App.Collections.TestCollection([
        new App.Models.TestModel(),
        new App.Models.TestModel({title: 'Second model'}),
        new App.Models.TestModel({title: 'Third model', description: 'Different description'}),
    ]);
    App.Views.EventsModalView = App.Views.BaseModalView.extend({
        collection: tests
    });
    var modal = new App.Views.EventsModalView();
    modal.show();
}

function customModal() {
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

function eventModal() {
    'use strict';
    console.log('event');
    // pass different events. default events will be overriden
    App.Views.EventsModalView = App.Views.BaseModalView.extend({
        events: {
            'click .js-close-btn': 'hide',
            'click .js-save-btn': 'alertMsg'
        },
        alertMsg: function () {
            alert('event modal');
        }
    });
    var modal = new App.Views.EventsModalView();
    modal.show();
}

function callbackModal() {
    'use strict';
    console.log('callback');
    // callback function to access modal view info
    var test = function (val) {
      console.log('callback', val);
    };
    App.Views.EventsModalView = App.Views.BaseModalView.extend({
        save: function () {
            this.hide();
            // run callback after modal is hidden
            this.$el.on('hidden.bs.modal', function() {
                test(this.$el);
                this.teardown();
            }.bind(this));
            // or if you don't need to wait until hidden, just run callback
            // test(this.$el);
        }
    });
    var modal = new App.Views.EventsModalView();
    modal.show();
}

$(document).ready(function () {
    'use strict';
    App.init();
    $('.btn-modal').on('click', function() {
        var id = $(this).attr('id');
        switch (id) {
            case 'base':
                baseModal();
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
                callbackModal();
                break;
        }
    });
});
