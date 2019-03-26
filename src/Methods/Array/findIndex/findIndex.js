//Returns the index of the first element which

Array.prototype.findIndex=function(callback){

    for(i=0; i<this.length;i++){
        if(callback(this[i])===true){
            return i
        }
    }
    return []
}

var x=[20,21,22,23,24,25,26,27,28,29].findIndex(function(e){return e%30===0})
console.log(x)