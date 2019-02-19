//Returns an object with all the ocurrences of characters on a string

String.prototype.dictionary = function() {
  var answer = {};

  this.split('').forEach(function(character) {
    if (answer[character]) {
      answer[character]++;
    } else {
      answer[character] = 1;
    }
  });

  return answer;
};
