//

Array.prototype.halves = function() {
  var l = this.length;
  var half = Math.round(l / 2);

  return [this.slice(0, half), this.slice(half, l)];
};
