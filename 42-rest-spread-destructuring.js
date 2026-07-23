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

console.log("getTempOfTmrw(AVG_TEMPERATURES):", getTempOfTmrw(AVG_TEMPERATURES));

// Destructuring Assignment with Nested Objects
// Use destructuring assignment to assign variables from nested objects.
const LOCAL_FORECAST = {
    today: { min: 72, max: 83 },
    tomorrow: { min: 73.3, max: 84.6 }
}

function getMaxOfTmrw(forecast) {
    "use strct";
    // destructure 2 times. Take tomorrow from forecast. Take max from previous destructure and assign to maxOfTomorrow
    const { tomorrow: { max: maxOfTomorrow } } = forecast;

    return maxOfTomorrow;
}

console.log("getMaxOfTmrw(LOCAL_FORECAST):", getMaxOfTmrw(LOCAL_FORECAST));

// Use Destructuring Assignment to Assign Variables from Arrays
// You can use destructuring assignment to assign variables from arrays.
// The difference between destructuring from arrays and destructuring from objects is that you cannot specify which element from the array to go into a variable. It just goes in order.
const [zArr, xArr] = [1, 2, 3, 4, 5, 6];
console.log("zArr, xArr:", zArr, xArr);
// You could add commas to jump positions
const [zArr2, xArr2, , yArr2] = [1, 2, 3, 4, 5, 6];
console.log("zArr2, xArr2, yArr2:", zArr2, xArr2, yArr2);

// You can use destructuring of arrays to switch the places of variables
let aArr = 8, bArr = 6;
(() => {
    "use strict";
    [aArr, bArr] = [bArr, aArr]
})();
console.log("aArr:", aArr);
console.log("bArr:", bArr);

// Use Destructuring Assignment with the Rest Operator
// We can use destructuring assignment with the rest operator to reassign array elements.
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeFirstTwo(list) {
    // We want to remove the first 2 elements
    const [, , ...arr] = list; // do nothing for the 1st and 2nd elements, and put everything else into arr variable

    return arr;
}
const arr = removeFirstTwo(source);
console.log("arr:", arr);
console.log("source:", source);

// Use Destrcturing Assignment to Pass an Object as a Function's Parameters
// You can use destructuring assignments to pass an object as a function's parameter.
const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};
const half = (function () {
    /*
    return function half(stats) { // half function gets stats argument. Instead of passing the whole object, we can just pass what we need
    */
    return function half({ max, min }) { // when stats is passed in, it is destructured to just the max and min variables
        return (max + min) / 2.0;
    };
})();
console.log("stats:", stats);
console.log("half(stats):", half(stats)); // stats is being passed when it is called down here
// This technique is commonly used with API calls. You can use destructuring to just get the information you need.