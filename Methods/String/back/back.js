String.prototype.back = function(){
  return this.split("").map(function(element){return element}).reverse().join("");
}