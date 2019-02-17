String.prototype.last = function(){
  return this.split("").map(function(element){return element}).reverse().join("")[0];
}