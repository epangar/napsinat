Math.isPrime=function(n){
 
    if(n<2){
      return false;
    } else{
      var divisor=2, limit = Math.sqrt(n)
  
      while(limit>=divisor){
        if(n%divisor===0){
          return false;
        }
        divisor++;
      }
  
      return true;
    }
  
  }
  