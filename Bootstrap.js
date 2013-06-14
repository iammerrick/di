"use strict";

var diContainer = require("di-container");

// Declaratively wire up dependencies. Note that while Domenic and Merrick both need the "tweeter"
// abstraction, we can choose *via configuration* to give them a difference "tweeter" concretion.
// They are completely decoupled from this knowledge.
diContainer.config({
  "app": require("./App"),
  "domenic": {
    constructor: require("./Domenic"),
    inject: {
      "tweeter": require("./LolSpeakTweeter-not-shown")
    }
  },
  "merrick": {
    constructor: require("./Merrick"),
    inject: {
      "tweeter": require("./LeetSpeekTweeter-not-shown")
    }
  }
}, {
  // Containers can fall through to parent providers, if tweeter isn't resolved in this container,
  // check in other-container, if its not there check in another-fallthrough-container. Consider
  // how node_modules are resolved.
  containers: [require('other-container'), require('another-fallthrough-container')]
});

// Construct the entire object graph, using above declarative config.
diContainer.get("app").run();

// Should Tweet:
// - "LOL I HAZ DID SOMETHING COOL LOL!"
// - "1 d1d s0m3th1ng 4w3s0m3!"
