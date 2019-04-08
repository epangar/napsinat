//Returns a boolean; true if every character in the string is alphabetic, false if it's not

String.prototype.isAlpha=function(){
                        return this.split("").map(function(c){
                                                    return /[a-zA-Z]/.test(c);
                                                }).every(function(e){
                                                    return e===true;
                                                })
}


