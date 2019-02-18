//Returns true if a number is prime and false if it's not. 0 and 1 are not considered primes. 

Math.isPrime = function(n) {
  if (n < 2) {
    return false;
  } else {
    var divisor = 2;
    var limit = Math.sqrt(n);

    while (limit >= divisor) {
      if (n % divisor === 0) {
        return false;
      }
      divisor++;
    }

    return true;
  }
};
