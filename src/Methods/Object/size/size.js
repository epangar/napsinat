Object.prototype.size=function(){
  return Object.keys(this).length;
}

// console.log({"a": 1, "b":{2:"s", $: "ed"}, "c":3}.size())