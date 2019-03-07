Number.prototype.isPrime = function (n) {
  n = Math.abs(n);
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

var x=5, y=8
console.log(y.isPrime())
console.log(x.isPrime())