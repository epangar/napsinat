//Returns an array with all the prime numbers between two given numbers

var isPrime = require("../isPrime/isPrime");
var range = require("../range/range");

Math.rangePrime=function(start,end){
  return Math.range(start,end).filter(function(number){
                                  if(Math.isPrime(number)){
                                    return number;
                                  }
                                })
}

console.log(Math.rangePrime(1,100))