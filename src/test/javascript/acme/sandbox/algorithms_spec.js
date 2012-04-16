describe('algorithms', function(){
  var fibonacci, power, bubbleSort;

  beforeEach(function () {
    ns = acme.sandbox.algorithms;
    fibonacci = acme.sandbox.algorithms.fibonacci;
    power = acme.sandbox.algorithms.power;
    bubbleSort = acme.sandbox.algorithms.bubbleSort;
  });

  describe('Fibonacci', function() {
    it('should calculate fibonacci numbers', function() {
      var expected = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];
      for (var i = 0; i < expected.length; i++) {
        expect(fibonacci(i)).toEqual(expected[i]);
      }
    });
  });

  describe('Power', function() {
    it('should calulate the power of n raised to m', function() {
      expect(power(5, 2)).toEqual(Math.pow(5, 2));
      expect(power(4, 1)).toEqual(Math.pow(4, 1));
      expect(power(100, 0)).toEqual(Math.pow(100, 0));
      expect(power(12, 12)).toEqual(Math.pow(12, 12));
      expect(power(0, 0)).toEqual(Math.pow(0, 0));
      expect(power(3, 6)).toEqual(Math.pow(3, 6));
    });
  });

  describe('Bubble Sort', function() {
    it('should sort stuff.', function() {
      unsorted = [10, 8, 6, 1, 2, 4, 9, 3, 7, 5];
      expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      expect(_.isEqual(expected, bubbleSort(unsorted))).toBeTruthy();
    });
  });
})
