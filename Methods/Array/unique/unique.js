Array.prototype.unique = function() {
  var arr = this;
  var answer = [];

  arr.forEach(function(element) {
    if (!answer.includes(element)) {
      answer.push(element);
    }
  });

  return answer;
};
