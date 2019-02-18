//Returns an array with all the numbers between start and end in ascending order

Math.range=function(start,end){

  return  [...Array(end-start+1).keys()].map(function(e){
    return e+start;
  });
}