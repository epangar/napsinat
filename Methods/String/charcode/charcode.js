String.prototype.charcode=function(){
  return this.split("").map(function(element){return element.charCodeAt(0)})
}