// Use the Rest Operator with Function Parameters
// The rest operator allows you to create a function that takes a variable number of arguments.
// The rest operator is 3 dots ...

// Without rest operator, fixed number of arguments
const sum = (function () {
    return function sum(x, y, z) {
        const args = [x, y, z];
        return args.reduce((a, b) => a + b, 0);
    };
})();
console.log("sum(1, 2, 3):", sum(1, 2, 3));

// With rest operator, we can have any number of arguments
const sumRest = (function () {
    return function sumRest(...args) { // ...args will convert everything passed in into 1 array called args
        return args.reduce((a, b) => a + b, 0);
    };
})();
console.log("sumRest(1, 2, 3):", sumRest(1, 2, 3));
console.log("sumRest(1, 2, 3, 4):", sumRest(1, 2, 3, 4));

// Use the Spread Operator to Evaluate Arrays In-Place
// The spread operator looks just like the rest operator, three dots ...
// But it expands an already existing array, or it spreads out an array. So it takes an array and spreads it out into its individual parts.
// You can only use it in an argument to a function, or an array literal.

const arr1 = ["JAN", "FEB", "MAR", "APR", "MAY"];
let arr2;
(function () {
    // arr2 = arr1; // In this case, we are not copying it. arr1[0] assignment will also change arr2. Pointing to same array.
    arr2 = [...arr1]; // Spread out the contents of arr1 into arr2
    arr1[0] = "potato";
})();
console.log(arr2);

// Use Destructuring Assignment to Assign Variables from Objects
// Destructuring assignment is a special syntax for neatly assigning values, taken directly from an object, to a variable.

var voxel = { x: 3.6, y: 7.4, z: 6.54 };

// Normal way:
var x = voxel.x; // x = 3.6
var y = voxel.y; // y = 7.4
var z = voxel.z; // z = 6.54

// Destructuring assignment:
const { x: a, y: b, z: c } = voxel; // a = 3.6, b = 7.4, c = 6.54

const AVG_TEMPERATURES = {
    today: 77.5,
    tomorrow: 79
}

function getTempOfTmrw(avgTemperatures) {
    "use strict";

    const { tomorrow: tempOfTomorrow } = avgTemperatures;

    return tempOfTomorrow;
}

console.log("getTempOfTmrw(AVG_TEMPERATURES):", getTempOfTmrw(AVG_TEMPERATURES))