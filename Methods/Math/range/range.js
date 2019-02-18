//Returns an array with all the numbers between start and end in ascending order

Math.range=function(start,end){

  var answer=[]

  if(end>=start){
    for(var i=start; i<=end; i++){
      answer.push(i)
    }

  } else {
    for(var i=start; i>=end; i--){
      answer.push(i)
    }

  }

  return answer;
}