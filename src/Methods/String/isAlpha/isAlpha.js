String.prototype.isAlpha=function(){

    return this.split("").map(function(c){return c.match(/[a-zA-Z]/)}).every((e)=>e===true)
}

console.log("Hello".isAlpha())