Array.prototype.last=function(){
  return this.map(function(element){return element}).reverse()[0]
}