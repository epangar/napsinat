//Returns an object with the index of each of the elements

Array.prototype.dictIndex=function(){

  var answer={}
  debugger
  for(var i=0; i< this.length;i++){
    var key=this[i]
    if(!answer[key]){
      answer[key]=this.indexOf(key)
    } else if(answer[key]){
      continue
    }
  }
  return answer

}

var x=[1,2,3,4,5,6,7,8,1,2,3,4,5].reverse().dictIndex()
console.log(x)