//Converts a number to octal

Math.octal=function(n){
  return !n ? 0 : n.toString(8)
}

console.log( Math.octal() )
console.log( Math.octal(1) )
console.log( Math.octal("a") )
console.log( Math.octal(10) )
console.log( Math.octal(80) )