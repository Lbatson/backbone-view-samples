(function () {
    'use strict';
    describe('App', function() {
        it('exists', function() {
            expect(App).to.exist;
        });

        it('contains Views, Models, Controllers, Routers, and Collections', function(){
            expect(App).to.include.keys(
                'Collections',
                'Models',
                'Controllers',
                'Views',
                'Routers'
            );
        });
    });

    describe('Base Model', function () {
        var model;

        beforeEach(function () {
            model = new App.Models.BaseModel();
        });

        it('should have defaults', function () {
            expect(model).to.be.an('object');
            expect(model.get('title')).to.equal('Test Model');
            expect(model.get('description')).to.equal('This is a test model');
        });

        it('set() should update value and get() should return new value', function () {
            model.set('title', 'TEST');
            expect(model.get('title')).to.equal('TEST');
        });

        it('capture() should create ._original', function () {
            model.capture();
            expect(model._original).to.be.an('object');
        });

        it('._original should have attributes of initialized model', function () {
            model.capture();
            expect(model._original.title).to.equal(model.get('title'));
            expect(model._original.description).to.equal(model.get('description'));
        });

        it('revert() should set model back to ._original values', function () {
            model.capture();
            model.set('title', 'TEST');
            model.set('description', 'TEST');
            expect(model.get('title')).to.equal('TEST');
            expect(model.get('description')).to.equal('TEST');
            model.revert();
            expect(model.get('title')).to.equal('Test Model');
            expect(model.get('description')).to.equal('This is a test model');
        });

        it('should trigger capture and revert events with method calls', function () {
            model.should.trigger('capture').when(function () {
                return model.capture();
            });
            model.should.trigger('revert').when(function () {
                return model.revert();
            });
        });
    });

    describe('BaseView', function () {
        var view;

        beforeEach(function () {
            view = new App.Views.Base();
        });

        it('should be an object', function () {
            expect(view).to.be.an('object');
        });

        it('should have _.container be an instance of backbone.babysitter object', function () {
            expect(view._container).to.be.an('object');
            expect(view._container).to.be.an.instanceof(Backbone.ChildViewContainer);
        });

        var firstChild = new App.Views.Base();

        it('should add view to track in _.container with addSubview', function () {
            view.addSubview(firstChild);
            expect(view._container.length).to.equal(1);
            expect(view._container.findByCid(firstChild.cid)).to.equal(firstChild);
        });

        it('should remove view from _.container with removeSubview', function () {
            view.removeSubview(firstChild);
            expect(view._container.length).to.equal(0);
        });

        var secondChild = new App.Views.Base();

        it('should add multiple views with addSubviews', function () {
            view.addSubviews([firstChild, secondChild]);
            expect(view._container.length).to.equal(2);
            expect(view._container.findByCid(firstChild.cid)).to.equal(firstChild);
            expect(view._container.findByCid(secondChild.cid)).to.equal(secondChild);
        });

        it('should remove all subviews from ._container', function () {
            view.removeSubviews();
            expect(view._container.length).to.equal(0);
        });
    });

    describe('BaseList', function () {
        // var sandbox;
        //
        // beforeEach(function() {
        //   // create a sandbox
        //   sandbox = sinon.sandbox.create();
        //
        //   // stub some console methods
        //   sandbox.stub(window.console, "log");
        //   sandbox.stub(window.console, "error");
        // });
        //
        // afterEach(function() {
        //   // restore the environment as it was before
        //   sandbox.restore();
        // });
        //var model

        it('Base List View should be an object', function () {
            expect(new App.Views.BaseList()).to.be.an('object');
        });

        // it("Mode should trigger an add event"){
        //
        // }
    });
})();
