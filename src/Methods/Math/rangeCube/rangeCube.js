//Returns an array of the nth first cube numbers

Math.rangeCube=function(n){
  var answer=[];

  for(i=0;i<n;i++){
    answer.push(Math.pow(i,3))
  }
 
  return answer;
}