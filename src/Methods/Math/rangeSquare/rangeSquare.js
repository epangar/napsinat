//Returns an array of the nth first square numbers

Math.rangeSquare = function (n) {

    return n
        ? new Array(n).fill().map(function (element, position) {
            return Math.pow(position, 2);
        })
        : Math.rangeSquare(10)
}