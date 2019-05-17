Date.prototype.format=function(input){
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
  var endings =["st", "nd", "rd", "th"]

  function getEnding(day){
    if([1,21,31].includes(day)){
      return "st"
    } else if([2,22].includes(day)){
      return "nd"
    } else if([3,23].includes(day)){
      return "rd"
    } else {
      return "th"
    }
  }

  var options ={
    "dd/MM/yyyy": (this.getDate()+"/"+(this.getMonth()+1)+"/"+this.getFullYear()),
    "dd/MM/yy": (this.getDate()+"/"+(this.getMonth()+1)+"/"+this.getFullYear()%100),
    "dd-MM-yyyy": (this.getDate()+"-"+(this.getMonth()+1)+"-"+this.getFullYear()),
    "dd-MM-yy": (this.getDate()+"-"+(this.getMonth()+1)+"-"+this.getFullYear()%100),
    "dd.MM.yyyy": (this.getDate()+"."+(this.getMonth()+1)+"."+this.getFullYear()),
    "dd.MM.yy": (this.getDate()+"."+(this.getMonth()+1)+"."+this.getFullYear()%100),
    "MM-dd-yyyy": (this.getMonth()+1)+"-"+this.getDate()+"-"+this.getFullYear(),
    "MM-dd-yy": ((this.getMonth()+1)+"-"+this.getDate()+"-"+this.getFullYear()%100),
    "MM.dd.yyyy": (this.getMonth()+1)+"."+this.getDate()+"."+this.getFullYear(),
    "MM.dd.yy": ((this.getMonth()+1)+"."+this.getDate()+"."+this.getFullYear()%100),
    "MM/dd/yyyy": (this.getMonth()+1)+"/"+this.getDate()+"/"+this.getFullYear(),
    "MM/dd/yy": ((this.getMonth()+1)+"/"+this.getDate()+"/"+this.getFullYear()%100),
    "D-M-Y": (this.getDate()+"-"+months[this.getMonth()]+"-"+this.getFullYear()),
    "D/M/Y": (this.getDate()+"/"+months[this.getMonth()]+"/"+this.getFullYear()),
    "DMY": (this.getDate()+getEnding(this.getDate())+" "+months[this.getMonth()]+", "+this.getFullYear()),
    "MDY": (months[this.getMonth()]+" " +this.getDate() + getEnding(this.getDate()) +", "+this.getFullYear() ),
    "yyyy-MM-dd": (this.getFullYear()+"-"+(this.getMonth()+1)+"-"+this.getDate()),
    "yyyy/MM/dd": (this.getFullYear()+"/"+(this.getMonth()+1)+"/"+this.getDate()),
  }

  return options[input]
}

var x= new Date;
console.log(x.format("dd-MM-yyyy"))
console.log(x.format("dd-MM-yy"))
console.log(x.format("MMddyyyy"))
console.log(x.format("D-M-Y"))
console.log(x.format("DMY"))
console.log(x.format("MDY"))
console.log(x.format("yyyy-MM-dd"))
