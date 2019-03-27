//Returns an object with the index of each of elements

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