//Returns an array with all the prime factors of a given number

var isPrime = require("../isPrime/isPrime")

Math.primeFactors = function (n) {
    var answer = [];
    var divisor = 2;
	
    while(n>1){
        if(Math.isPrime(divisor) && n%divisor===0){
            n/=divisor;
            answer.push(divisor);
        } else {
            divisor++;
        }
    }

    return answer;
}

