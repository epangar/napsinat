//Shuffles the content of an array

Array.prototype.shuffle = function(){

    var answer=[], arr=this, l=arr.length ;

    while(answer.length<l){
        var n=Math.floor(Math.random()*l)

        if(!answer.includes(n)){
            answer.push(n)
        }
    }

    return answer.map(function(element){
      return arr[element]
      });
};