//Returns an array with the digits of a number

Math.digits = function(n){
    return n.toString().split("").map(function(element){return parseInt(element)})
}