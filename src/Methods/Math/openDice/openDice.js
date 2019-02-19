Math.openDice=function(number, sides){
    var arr=[];

    for(var i=0; i<number; i++){
        var roll=Math.floor(Math.random()*sides+1);
        arr.push(roll)
    }

    arr.forEach(function(dice){
                if(dice===sides){
                    var extra=Math.floor(Math.random()*sides+1);
                    arr.push(extra);

                    if(extra===sides){
                        var extra=Math.floor(Math.random(0,1)*sides+1)
                        arr.push(extra)
                      }
                }
    })

    var result=arr.reduce(function(a,b){return a+b})   
       return [result, arr] 
    }