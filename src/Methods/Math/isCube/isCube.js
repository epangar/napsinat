//Returns a boolean; true if a number is a cube, false if it's not

Math.isCube=function(n){
  return parseInt(Math.cbrt(n))===Math.cbrt(n);
}