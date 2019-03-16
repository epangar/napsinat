Date.prototype.format=function(input){
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
  var options ={
    "ddmmyyyy": this.getDate()+"/"+(this.getMonth()+1)+"/"+this.getFullYear(),
    "mmddyyyy": (this.getMonth()+1)+"/"+this.getDate()+"/"+this.getFullYear(),


  }

  return options[input]
}

var x= new Date;
console.log(x.format("ddmmyyyy"))
console.log(x.format("mmddyyyy"))