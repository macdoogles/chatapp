/**
 * @fileoverview Controller for this weird phone app thing in the angular
 * tutorial. I'm also experimenting with closure here. 
 */

goog.provide('acme.sandbox.PhoneController');

/**
 * Create a new PhoneController.
 *
 * @constructor
 */
acme.sandbox.PhoneController = function() {
  this.phones = [
    { 'name': 'Nexus S', 'snippet': 'Fast just got faster with Nexus S.' },
    { 'name': 'Motorola XOOM\u2122 with Wi-Fi', 'snippet': 'The Next, Next Generation tablet.' },
    { 'name': 'MOTOROLA XOOM\u2122', 'snippet': 'The Next, Next Generation tablet.' }
  ];
};

acme.sandbox.PhoneController.phones = [];

/**
 * If I was using ADVANCED_OPTIMIZATIONS I would need to export these public
 * properties with @ export (no spaces). 
 */
acme.sandbox.PhoneController.prototype.getPhoneSnippets = function() {
  return this.phones;
};

acme.sandbox.PhoneController.prototype.addPhoneSnippet = function(name, snippet) {
  return this.phones.push({'name': name, 'snippet': snippet});
};
