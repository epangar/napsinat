//Returns the Lesser Common Multiple of the given numbers
Math.LCM=function(array){
  
  if(array.length<2){
    return array[0]
  } else {
  var answer=[], first=array[0], multiplier=0;

    while(answer.length<array.length){
      var multiple=first*multiplier;
      
      for(var i=0;i<array.length;i++){
        if(multiple%array[i]!==0){
          answer=[];
          break
        } else {
          answer.push(multiple)
        }
      }

      multiplier++
    }

  
  return answer;
  }
}
console.log(Math.LCM([3,2,10]))