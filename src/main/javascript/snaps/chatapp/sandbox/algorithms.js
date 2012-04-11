goog.provide('snaps.chatapp.sandbox.algorithms');

goog.require('underscore');

snaps.chatapp.sandbox.algorithms.fibonacci = function(n) {
  if (n == 0) {
    return 0;
  }
  if (n == 1) {
    return 1;
  }
  var fibonacci = snaps.chatapp.sandbox.algorithms.fibonacci;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

snaps.chatapp.sandbox.algorithms.power = function(n, m) {
  if (m == 0) {
    return 1;
  }
  if (m == 1) {
    return n
  }
  var power = snaps.chatapp.sandbox.algorithms.power;
  return n * power(n, m - 1);
}

snaps.chatapp.sandbox.algorithms.bubbleSort = function(array) {
  for (var i = array.length - 1; i > 0; i--) {
    for (var j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) {
        var temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
};