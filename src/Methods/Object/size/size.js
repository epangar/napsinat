Object.prototype.size=function(){
  return Object.keys(this).length;
}

console.log({"a": 1, "b":2, "c":3}.size())