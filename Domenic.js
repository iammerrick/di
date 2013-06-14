"use strict";

// Domenic needs a Tweeter
function Domenic(tweeter) {
  this.tweeter = tweeter;
}
Domenic.inject = ["tweeter"];

Domenic.prototype.doSomethingCool = function () {
  return this.tweeter.tweet("Did something cool!");
};

module.exports = Domenic;

