/*Returns the average of the elements of a given array*/
Array.prototype.avg = function () {
    if (this.length === 0) {
        return 0
    } else if (this.length === 1) {
        return this[0];
    } else {
        return this.reduce(function (a, b) {
            return a + b;
        }) / this.length;
    }
};