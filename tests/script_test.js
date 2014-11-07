
var expect = chai.expect;

describe("The App", function() {

    it("App exists", function() {
      expect(App).to.exist;
    });

    it("App contains 'Views, Models, Routers, and Collections'", function(){
      expect(App).to.include.keys(
        "Collections",
        "Models",
        "Views",
        "Routers"
      );
    })

});

describe("Test Model", function(){
  it("Model should have defaults", function(){
    var model = new App.Models.TestModel();
    expect(model).to.be.ok;
    expect(model.get('title')).to.equal("Test Model");
    expect(model.get('description')).to.equal("This is a test model");
  })
})

describe("Base View", function() {
    it("BaseView should be an object", function() {
      var list = new App.Views.BaseView();
      // expect(list).to.be.an("object");
      expect(list).to.be.an("object");
    });
});

describe("Base View List", function() {
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

    it("Base List View should be an object", function() {
      console.log(App.Views);
      var tests = {};
      var list = new App.Views.ListView();

      expect(list).to.be.an("object");
    });

    // it("Mode should trigger an add event"){
    //
    // }
});
