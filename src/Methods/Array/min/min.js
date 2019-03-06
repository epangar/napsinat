Array.prototype.max=function(){
    return this.sort(function(a,b){
                    return a-b
                    })[0]
}

