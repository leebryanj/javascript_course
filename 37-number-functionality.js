// Generate Random Fractions
// There is a simple way to create a random decimal number in JavScript using the Math.random() function.
// Math.random() returns a number between 0 (inclusive) and 1 (exclusive). So, it can be 0, but not 1.
function randomFraction() {
    return Math.random();
}

console.log("randomFraction():", randomFraction());

// Generate Random Whole Numbers
// This can be accomplished with Math.floor(), which rounds down to the nearest whole number.
var randomNumberBetween0and19 = Math.floor(Math.random() * 20);
console.log("randomNumberBetween0and19:", randomNumberBetween0and19);

// Generate random whole number between 0-9
function randomWholeNum() {
    return Math.floor(Math.random() * 10);
}
console.log("randomWholeNum:", randomWholeNum());

// Generate Random Whole Numbers within a Range
function ourRandomRange(ourMin, ourMax) {
    // generate a random number between min and max.
    // (ourMax - ourMin + 1) is the amount of numbers in our range.
    // Then multiply amount of numbers with Math.random().
    // + ourMin to start at the min value. Without it, it would start from 0, since previous calculation only accounted for range.
    return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}
console.log("ourRandomRange(1, 9)", ourRandomRange(1, 9));

function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

var myRandom = randomRange(5, 15);
console.log("randomRange(5, 15):", myRandom);

// Use the parseInt Function
// parseInt takes a string and returns an integer. If the string cannot be returned as in integer, it returns NaN (not a number).
function convertToInteger(str) {
    return parseInt(str);
}

console.log('parseInt("56"):', convertToInteger("56"));

// Use the parseInt Function with a Radix
// The parseInt function can also be used with a radix. The radix specifies the base of the number in the string, such as base 2 (binary), or base 7, or base 8. Default is base 10.
function convertToIntegerBase2(str) {
    return parseInt(str, 2);
}

console.log('parseInt("10011", 2):', convertToIntegerBase2("10011"));