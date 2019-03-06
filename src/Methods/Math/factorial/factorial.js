//Returns the factorial of a given number

Math.factorial=function(number){
    var answer=1

    for(i=1;i<=number;i++){
        answer*=i;
    }

    return answer;
}

