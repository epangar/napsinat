/*Returns an array of all the positions which equal to true. 
If none does, it returns an empty array-*/

Array.prototype.positions=function(callback){
    var answer

    for(i=0; i<this.length;i++){
        if(callback(this[i])===true){
            answer.push(i)
        }
    }

    return answer;
}

// var x=[20,21,22,23,24,25,26,27,28,29].positions(function(e){return e%30===0})
// console.log(x)