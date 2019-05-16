Number.prototype.isPrime = function() {
  var n = Math.abs(this);
  if (n < 2) {
    return false;
  } else {
    var divisor = 2;
    var limit = Math.sqrt(n);

    if (limit === parseInt(limit)) {
      return false;
    } else {

      while (limit >= divisor) {
        if (n % divisor === 0) {
          return false;
        }
        divisor++;
      }
    }

    return true;
  }
};

// n=new Number(89)
// console.log(n.isPrime(10))