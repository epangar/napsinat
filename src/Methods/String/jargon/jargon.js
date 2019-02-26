//Appends a string of n random characters to an existing string

String.prototype.jargon=function(n){
  var answer="";
  
  //Interval 33-126 161-767
  
  for(i=0;i<n;i++){
    answer+=String.fromCharCode(i)
    console.log(i,String.fromCharCode(i))
  }

  return this+answer;
}

