//Converts a number to another base

Math.base=function(n=0,b){
  return !n ? 0 : (!b ? n.toString(10) : n.toString(b));
}



console.log(   Math.base(240,16) )
// console.log(   Math.base() )
// console.log(   Math.base() )