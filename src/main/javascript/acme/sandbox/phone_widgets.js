goog.provide('acme.sandbox.widgets');

goog.require('jquery');

acme.sandbox.widgets.toggleShowMore = function() {
  $('#moreBox').toggle('slow');
}

$(document).ready(function() {
  $('#showButton').click(acme.sandbox.widgets.toggleShowMore);
});
