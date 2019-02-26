//Returns an array with all the prime factors of a given number

var isPrime = require("../isPrime/isPrime")

Math.primeFactors = function (n) {
    var answer = [];
    var divisor = 2;

    while (n >= divisor) {
        if(Math.isPrime(divisor) && n%divisor===0){
            answer.push(divisor)
        }
        
        divisor++
    }

    return answer;
}

console.log(Math.primeFactors(50))