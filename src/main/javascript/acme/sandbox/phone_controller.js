/**
 * @fileoverview Controller for this weird phone app thing in the angular
 * tutorial. I'm also experimenting with closure here. 
 */

goog.provide('acme.sandbox.PhoneController');

/**
 * Create a new PhoneController.
 *
 * @constructor
 * @export
 */
acme.sandbox.PhoneController = function() {
  this.phones_ = [
    { 'name': 'Nexus S', 'snippet': 'Fast just got faster with Nexus S.' },
    { 'name': 'Motorola XOOM&trade; with Wi-Fi', 'snippet': 'The Next, Next Generation tablet.' },
    { 'name': 'MOTOROLA XOOM&trade;', 'snippet': 'The Next, Next Generation tablet.' }
  ];
};

/**
 * @export
 */
acme.sandbox.PhoneController.prototype.getPhoneSnippets = function() {
  return this.phones_;
};

/**
 * @export
 */
acme.sandbox.PhoneController.prototype.addPhoneSnippet = function(name, snippet) {
  return this.phones_.push({'name': name, 'snippet': snippet});
};
