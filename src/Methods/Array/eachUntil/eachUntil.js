/*Iterates over an array until a condition is met; at that moment it stops 
and returns the section of the array so far.*/

Array.prototype.eachUntil=function(callback){
  var answer=[];

  for(i=0;i<this.length;i++){
    if(callback(this[i])===false){
      answer.push(this[i])
    } else {
      return answer;
    }
  }
}

