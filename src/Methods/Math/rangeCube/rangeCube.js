//Returns an array of the nth first cube numbers. If no argument is given,
//it returns an array of the first 10 cube numbers, counting from 0.

// Math.rangeCube = function () {
//   var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
//   return new Array(n).fill().map(function (element, position) {
//     return Math.pow(position, 3);
//   });
// };

Math.rangeCube= (n=10) => new Array(n).fill()
                      .map((element, position) => Math.pow(position,3)
                      )


