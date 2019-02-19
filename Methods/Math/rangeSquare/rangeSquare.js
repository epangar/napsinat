//Returns an array of the nth first square numbers

Math.rangeSquare=function(n){
    var answer=[]

    for(var i=0; i<=n;i++){
        answer.push(Math.pow(i,2))
    }

    return answer;
}