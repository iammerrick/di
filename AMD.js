define(function(require) {

var diContainer = require("di-container");

// Declaratively wire up dependencies. Note that while Domenic and Merrick both need the "tweeter"
// abstraction, we can choose *via configuration* to give them a difference "tweeter" concretion.
// They are completely decoupled from this knowledge.
diContainer.config({
  "app": "./App",
  "domenic": {
    constructor: "./Domenic",
    inject: {
      "tweeter": "./LolSpeakTweeter-not-shown"
    }
  },
  "merrick": {
    constructor: "./Merrick",
    inject: {
      "tweeter": "./LeetSpeekTweeter-not-shown"
    }
  }
}, {
  resolver: require('AMDResolver'),
  main: 'app'
});


// Should Tweet:
// - "LOL I HAZ DID SOMETHING COOL LOL!"
// - "1 d1d s0m3th1ng 4w3s0m3!"
});
