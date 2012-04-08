(function(){

goog.provide('snaps.chatapp.test');
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

// Externs.
window['snaps.chatapp.test.PhoneController'] = snaps.chatapp.test.PhoneController;
window['snaps.chatapp.test.PhoneController.getPhoneSnippets'] 
    = snaps.chatapp.test.PhoneController.getPhoneSnippets;
window['snaps.chatapp.test.PhoneController.addPhoneSnippet'] 
    = snaps.chatapp.test.PhoneController.addPhoneSnippet;
})();

function publicpublicpublic() {
  
}