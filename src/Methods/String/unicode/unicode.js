//Returns an array of all the unicode values of a given string

String.prototype.unicode=function(){
  return this.split("").map(function(element){return element.charCodeAt(0)})
}