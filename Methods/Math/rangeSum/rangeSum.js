//Returns the sum of the elements of an array with all the numbers between start and end 

Math.rangeSum=function(start,end){

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

  return answer.reduce(function(a,b){
        return a+b;
    });
  }