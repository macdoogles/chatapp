/**
 * @fileoverview Controller for this weird phone app thing in the angular
 * tutorial. I'm also experimenting with closure here. 
 */

goog.provide('snaps.chatapp.test.PhoneController');

/**
 * Create a new PhoneController.
 *
 * @constructor
 */
snaps.chatapp.test.PhoneController = function() {
  this.phones_ = [
    { 'name': 'Nexus S', 'snippet': 'Fast just got faster with Nexus S.' },
    { 'name': 'Motorola XOOM&trade; with Wi-Fi', 'snippet': 'The Next, Next Generation tablet.' },
    { 'name': 'MOTOROLA XOOM&trade;', 'snippet': 'The Next, Next Generation tablet.' }
  ];
};

snaps.chatapp.test.PhoneController.prototype.getPhoneSnippets = function() {
  return this.phones_;
};

snaps.chatapp.test.PhoneController.prototype.addPhoneSnippet = function(name, snippet) {
  return this.phones_.push({'name': name, 'snippet': snippet});
};

goog.exportSymbol(
    'snaps.chatapp.test.PhoneController',
    snaps.chatapp.test.PhoneController);

goog.exportProperty(
    snaps.chatapp.test.PhoneController.prototype,
    'getPhoneSnippets',
    snaps.chatapp.test.PhoneController.prototype.getPhoneSnippets);

goog.exportProperty(
    snaps.chatapp.test.PhoneController.prototype,
    'addPhoneSnippet',
    snaps.chatapp.test.PhoneController.prototype.addPhoneSnippet);
