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
acme.sandbox.PhoneController = function($xhr) {
  var self = this;
  $xhr('GET', '/chatapp/rest/sandbox/phones', function(code, response) {
    self.phones = response.phone;
  });
};

acme.sandbox.PhoneController.$inject = ['$xhr'];

acme.sandbox.PhoneController.phones = [];

/**
 * If I was using ADVANCED_OPTIMIZATIONS I would need to export these public
 * properties with @ export (no spaces) JSDoc notation. 
 */
acme.sandbox.PhoneController.prototype.getPhoneSnippets = function() {
  return this.phones;
};

acme.sandbox.PhoneController.prototype.addPhoneSnippet = function(modelNumber, name, snippet) {
  return this.phones.push({'modelNumber': modelNumber, 'name': name, 'snippet': snippet});
};
