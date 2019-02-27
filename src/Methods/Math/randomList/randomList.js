//Returns an array of n random numbers between the minimum and maximum values.
//If no minimum or maximum are given, it returns an array of numbers between 0 and 9

Math.randomList=function(n, minimum, maximum){
    
    if(!minimum && !maximum){
        var minimum=0, maximum=9;
    } 

    var answer=[]

    for(i=0;i<n;i++){
        var possibleResults = maximum-minimum+1;
        var number=Math.floor(Math.random()*possibleResults)+minimum;
        answer.push(number)
    }
    
    return answer;
}

console.log(Math.randomList(20, 5,5))