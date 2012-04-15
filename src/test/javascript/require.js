/**
 * @fileoverview Define fake implementations of goog.provide and goog.require
 * when working with uncompiled testing (presumably in development or test
 * mode). This code will be completely ignored by the Google Closure javascript
 * compiler.
 * 
 * Primarily this is needed for Jasmine unit tests.
 */

var goog = goog || {};

goog.provide = function(namespace) {
  var root = window;
  var names = namespace.split(".");
  for (var i = 0; i < names.length; i++) {
    var name = names[i];
    root[name] = root[name] || {};
    root = root[name];
  }
};

goog.require = function() {
  // pass
};
