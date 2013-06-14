"use strict";

// Merrick also needs a tweeter
function Merrick(tweeter) {
  this.tweeter = tweeter;
}
Merrick.inject = ["tweeter"];

Merrick.prototype.doSomethingAwesome = function () {
  return this.tweeter.tweet("Did something awesome!");
};

module.exports = Merrick;
