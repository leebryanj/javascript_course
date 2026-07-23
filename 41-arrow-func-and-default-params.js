// Use Arrow Functions to Write Concise Anonymous Functions

// This is an anonymous function. It is assigned to the variable magic, but there is no word after the function keyword to assign a name to the function
var magic = function () {
    return new Date();
}
// Whenever you have an anonymous function, you can convert it into an arrow function
var magicArrow = () => {
    return new Date();
}
// But if we're just returning one value, we can even omit the return keyword or the curly braces
const simpleMagicArrow = () => new Date();

// Write Arrow Functions with Parameters
// Just like in a normal function, you can pass arguments to arrow functions.

// Normal function
var myConcat = function (arr1, arr2) {
    return arr1.concat(arr2);
}

console.log("myConcat:", myConcat([1, 2], [3, 4, 5]));

// Arrow Function
const myArrowConcat = (arr1, arr2) => arr1.concat(arr2);

console.log("myArrowConcat:", myArrowConcat([1, 2], [3, 4, 5]));

// Write Higher Order Arrow Functions
// Arrow function work really well with higher order functions, such as map, filter, and reduce.
// Whenever one function takes another function as an argument, that's a good time for an arrow function.
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

// We want to filter out everything that's not a positive integer
const squareList = (arr) => {
    // With only 1 argument, you don't need () around the argument for arrow functions
    const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x); // 4, 42, 6, then square each
    return squaredIntegers;
}

const squaredIntegers = squareList(realNumberArray);
console.log("squaredIntegers: ", squaredIntegers);

// Write Higher Order Arrow Functions
// In order to create more flexible functions, you can use default parameters.
// The default parameter kicks in when the argument is not specified or it's undefined

// With value = 1, if a value isn't passed in it will be set to 1 automatically. If it is passed in, it will be set to whatever is passed in
const increment = (function () {
    return function increment(number, value = 1) {
        return number + value;
    }
})();
console.log("increment(5, 2):", increment(5, 2));
console.log("increment(5):", increment(5));
