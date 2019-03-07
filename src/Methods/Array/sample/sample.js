Array.prototype.sample=function(number){
    if(!number){
        return this[Math.floor(Math.random()*this.length)]
    }
}