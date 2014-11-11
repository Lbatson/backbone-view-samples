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
        it('Model should have defaults', function(){
            var model = new App.Models.BaseModel();
            expect(model).to.be.ok;
            expect(model.get('title')).to.equal('Test Model');
            expect(model.get('description')).to.equal('This is a test model');
        });
    });

    describe('Base View', function() {
        it('BaseView should be an object', function() {
            expect(new App.Views.Base()).to.be.an('object');
        });
    });

    describe('Base View List', function() {
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
