//Returns all the truthy elements of an array.

Array.prototype.truthy = function(){
  var arr=this;
  return arr.filter(function(element,position){
    if(arr.indexOf(element)===position){
      return element;
    } 
  })
}