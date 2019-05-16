/*Returns the index of the first element which returns true for the condition.
If no elements mathces the condition, it returns an empty array.*/

Array.prototype.findIndex=function(callback){

    for(i=0; i<this.length;i++){
        if(callback(this[i])===true){
            return i
        }
    }
    return []
}

// var x=[20].findIndex(function(e){return (e%3===0)})
// console.log(x)