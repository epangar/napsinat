//Appends a string of n random characters to an existing string

String.prototype.jargon=function(n){
  var answer="";
  
  //Interval 33-126
  
  for(i=0;i<n;i++){
    var char=Math.floor(Math.random()*94)+33;
    answer+=String.fromCharCode(char);
  }

  return this+answer;
}
