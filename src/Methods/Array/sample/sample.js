/*Returns a sample of n random elements of the array. If no input is
given, it returns a single random element*/

Array.prototype.sample=function(number){
    
    if(!number){
        var randomNumber=Math.floor(Math.random()*this.length)
        return this[randomNumber]
    } else {
        var answer=[]

        while(answer.length<number){
            var randomNumber=Math.floor(Math.random()*this.length)
            if(!answer.includes(this[randomNumber])){
                answer.push(this[randomNumber])
            }
        }

        return answer;

    }
}

console.log([1,2,3,4,5,6,7,8,9,0].sample())
console.log([1,2,3,4,5,6,7,8,9,0].sample(4))