//Returns n elements of a given array

Array.prototype.drop = function(n){
  return this.slice(n, this.length);
}