class Jargon {
  
  constructor(duration){
    this.duration=duration;
  }
  
  content(){
    var answer="";

    for(var i=0;i<this.duration;i++){
      var char=Math.floor(Math.random()*94)+33;
      answer+=String.fromCharCode(char);
    }

    return answer;
  }
}

var x=new Jargon(55)
console.log(x)
console.log(x.content())