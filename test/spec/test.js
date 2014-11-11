(function () {
    'use strict';
    describe('The App', function() {
        it('App exists', function() {
            expect(App).to.exist;
        });

        it('App contains Views, Models, Controllers, Routers, and Collections', function(){
            expect(App).to.include.keys(
                'Collections',
                'Models',
                'Controllers',
                'Views',
                'Routers'
            );
        });
    });

    describe('Base Model', function(){
        it('model should have defaults', function(){
            var model = new App.Models.BaseModel();
            expect(model).to.be.ok;
            expect(model.get('title')).to.equal('Test Model');
            expect(model.get('description')).to.equal('This is a test model');
        });

        it('model.set() should update value and get() should return new value', function(){
            var model = new App.Models.BaseModel();
            model.set('title', 'TEST');
            expect(model.get('title')).to.equal('TEST');
        });

        it('model.capture() should create model._original', function(){
            var model = new App.Models.BaseModel();
            model.capture();
            expect(model._original).to.be.an('object');
        });

        it('model._original should have starting attributes from when created', function(){
            var model = new App.Models.BaseModel();
            model.capture();
            expect(model._original.title).to.equal(model.get('title'));
            expect(model._original.description).to.equal(model.get('description'));
        });

        it('model.revert() should set model back to model._original values', function(){
            var model = new App.Models.BaseModel();
            model.capture();
            model.set('title', 'TEST');
            model.set('description', 'TEST');
            expect(model.get('title')).to.equal('TEST');
            expect(model.get('description')).to.equal('TEST');
            model.revert();
            expect(model.get('title')).to.equal('Test Model');
            expect(model.get('description')).to.equal('This is a test model');
        });
    });

    describe('BaseView', function() {
        it('base should be an object', function() {
            expect(new App.Views.Base()).to.be.an('object');
        });
    });

    describe('BaseList', function() {
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

        it('Base List View should be an object', function() {
            expect(new App.Views.BaseList()).to.be.an('object');
        });

        // it("Mode should trigger an add event"){
        //
        // }
    });
})();
