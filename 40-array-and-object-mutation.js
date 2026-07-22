// Mutate an Array Declared with const
// While you cannot reassign a variable declared with const, you can mutate an array.
const s = [5, 7, 2];
function editInPlace() {
    "use strict";
    // s = [2, 5, 7]; // TypeError. Cannot reassign to a const.
    // But we can update the array using bracket notation
    s[0] = 2;
    s[1] = 5;
    s[2] = 7;

}
editInPlace()
console.log("editIntPlace() with bracket notation:", s);

// Prevent Object Mutation
// A const declaration alone, it does not necessarily protect your data from mutation.
// // If you have an object or array, you can still mutate it, even if it is declared with const.
function freezeObj() {
    "use strict";
    const MATH_CONSTANTS = {
        PI: 3.14
    };

    Object.freeze(MATH_CONSTANTS);

    try {
        MATH_CONSTANTS.PI = 99; // without Object.freeze this would work
    } catch (error) {
        console.log(error); // with Object.freeze we get a TypeError
    }
    return MATH_CONSTANTS.PI;
}

const PI = freezeObj();
console.log("PI after running freezeObj():", PI);
// Whenever you have an object, and you don't want any of the items in the object to change, use Object.freeze()