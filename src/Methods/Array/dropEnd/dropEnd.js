//Returns the last n elements of an array

Array.prototype.dropEnd=function(n){
  var start=this.length-n;
  return this.slice(start,this.length)
}