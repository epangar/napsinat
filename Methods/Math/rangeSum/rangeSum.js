Math.rangeSum=function(start,end){

    return  [...Array(end-start+1).keys()].map(function(e){
      return e+start;
    }).reduce(function(a,b){
        return a+b;
    });
  }