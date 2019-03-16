//Converts a number to another base

Math.base=function(n,b){
  return !b ? n.toString() : n.toString(b);
}