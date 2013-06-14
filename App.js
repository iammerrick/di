"use strict";

function App(domenic, merrick) {
  this.domenic = domenic;
  this.merrick = merrick;
}
App.inject = ["domenic", "merrick"];

App.prototype.run = function () {
  this.domenic.doSomethingCool().done();
  this.merrick.doSomethingAwesome().done();
};

module.exports = App;
