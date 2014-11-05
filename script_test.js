
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

describe("Base View", function() {
    it("BaseView should be an object", function() {
      var list = new App.Views.BaseView();

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

    it("Base List View should be an object", function() {
      console.log(App.Views);
     App.Views.TestBaseListView = App.Views.BaseListView.extend({
                                    template: "a test"
                                  })
      var list = new App.Views.TestBaseListView();

      expect(list).to.be.an("object");
    });
});
