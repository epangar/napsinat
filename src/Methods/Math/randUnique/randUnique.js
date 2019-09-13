//Returns a shuffled array of all the numbers between the minimum and maximum values.
//If no minimum or maximum are given, it returns an array of numbers between 0 and 9

Math.randomList=function(minimum=0, maximum=9){
    
    var answer=[], possibleResults = maximum-minimum+1;

    while(answer.length < possibleResults) {
        
        var number=Math.floor(Math.random()*possibleResults)+minimum;
        
        if(answer.includes(number)){
            continue
        } else {
            answer.push(number)
        }
        
    }
    
    return answer;
}
