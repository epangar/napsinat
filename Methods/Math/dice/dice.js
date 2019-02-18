Math.dice=function(number, sides){
  var arr=[];

  var i=0;i<number;i++){
    var roll=Math.floor(Math.random()*sides+1);
    arr.push(roll);
  }
  var result=arr.reduce(function(a,b){return a+b})
  return [result, arr];
}