//Shuffles the content of a string

var shuffle=require("../../Array/shuffle/shuffle")

String.prototype.shuffle=function(){
  return this.split("").shuffle().join("")
}

