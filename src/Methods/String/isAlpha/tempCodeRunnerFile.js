String.prototype.isAlpha=function(){

    return this.split("").every(function(c){return c===/[a-zA-Z]/})
}

console.log("Hello".isAlpha())