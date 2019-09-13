//Returns an array with all the prime numbers between two given numbers

var isPrime = require("../isPrime/isPrime");
var range = require("../range/range");

Math.rangePrime=function(start=0,end=30){
  return Math.range(start,end).filter(function(number){
                                  if(Math.isPrime(number)){
                                    return number;
                                  }
                                });
}

