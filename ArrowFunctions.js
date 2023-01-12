// ES5 
// function double(arr) {
//  return arr.map(function(val) {
//    return val * 2;
//  });
//}

// ES2015 
const double = arr => arr.map(val => val * 2);

// Refactor function to use arrow functions

//function squareAndFindEvens(numbers){
//    var squares = numbers.map(function(num){
//      return num ** 2;
//    });
//    var evens = squares.filter(function(square){
//      return square % 2 === 0;
//    });
//    return evens;
//  }
// With arrow function 
const squareAndFindEvens = numbers => numbers.map(val => val ** 2).filter(square => square % 2 === 0)