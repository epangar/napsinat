Math.divisors=function(n){
    var answer=[], divisor=1;
  
    while(n>=divisor){
      if(n%divisor===0){
        answer.push(divisor)
      }
  
      divisor++
    }
  
    return answer;
  }