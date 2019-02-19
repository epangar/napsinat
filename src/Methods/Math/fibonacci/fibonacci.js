Math.fibonacci=function(first, second, total){
  var arr=[first, second];

  if(!total || total<=2){
    return arr;
  } else {
    var copy=arr.map(function(element){return element;}).reverse();

    while(copy.length<total) {
      copy.unshift(copy.slice(0,2).reduce(function(a,b){return a+b}));
    } 
    
    return copy.reverse()
  }
}