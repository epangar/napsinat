/*Returns the average of the elements of a given array*/
Array.prototype.avg = function () {
    if (this.length < 2) {
        return this;
    }
    else {
        return this.reduce(function (a, b) {
            return a + b;
        }) / this.length;
    }
};


// export default avg
