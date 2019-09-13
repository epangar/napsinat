//Returns an array of the given random values, as if a group of dice were thrown, and its sum. 

Math.dice=function(number, sides){
  var arr;

  for(var i=0;i<number;i++){
    var roll=Math.floor(Math.random()*sides+1);
    arr.push(roll);
  }
  var result=arr.reduce(function(a,b){return a+b});
  return [arr, result];
}