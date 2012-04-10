goog.provide('snaps.chatapp.sandbox.widgets');

snaps.chatapp.sandbox.widgets.toggleShowMore = function() {
  $('#moreBox').toggle('slow');
}

$(document).ready(function() {
  $('#showButton').click(snaps.chatapp.sandbox.widgets.toggleShowMore);
});
