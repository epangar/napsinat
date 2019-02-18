Math.series=function(start,end){

    var answer= new Array(end-start+1);
    return answer.fill(start).map(function(element, position){

                              return element+position;
                                })
  
}