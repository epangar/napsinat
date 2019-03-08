Array.prototype.toAll=function(fu){
  var answer=[]
  this.forEach(function(element,position){
      answer[position]= fu(element)
  })
  return answer
}

var x=[1,2,3,4,5].toAll(function(e){return e+3})
console.log(x)
