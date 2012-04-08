function fibonacci(n) {
  if (n == 0) {
    return 0;
  }
  if (n == 1) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function power(n, m) {
  if (m == 0) {
    return 1;
  }
  if (m == 1) {
    return n
  }
  return n * power(n, m - 1);
}

function bubbleSort(array) {
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

function quickSort(array) {
  
}
