//Applies a function to all the elemnts of an array and return a new array

Array.prototype.toAll=function(callback){
  var answer=[]
  this.forEach(function(element,position){
      answer[position]= callback(element);
  })
  return answer
}

// var x=[1,2,3,4,5].toAll(function(e){return e+3})
// console.log(x)
