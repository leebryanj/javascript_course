// Comparison with the Equality Operator
// There are many comparison operators in JavaScript that will return a boolean of true or false.
// The most common is the equality operator ==. Remember = is the assignment operator.

function testEqual(val) {
    if (val == 12) {
        return "Equal";
    }
    return "Not Equal";
}

console.log("testEqual:", testEqual(10));

// Comparison with the Strict Equality Operator
// Strict equality operator ===. 
// The == operator attempts to convert both values being compared to a common type. The === does not do the type conversion.
/*
3 == 3 is true
3 == "3" is true, string would be converted to a number
3 === 3 is true
3 === "3" is false, string would not be converted to a number
*/

function testStrict(val) {
    if (val === 7) {
        return "Equal";
    }
    return "Not Equal";
}

console.log("10 strict:", testStrict(10));
console.log("7 strict: ", testStrict(7));
console.log("\"7\" strict: ", testStrict("7"));

// Practice Comparing Different Values

function compareEquality(a, b) {
    if (a === b) { // changing this to == or === changes the result
        return "Equal";
    }
    return "Not Equal";
}

console.log(compareEquality(10, "10"));

// Comparison with the Inequality Operator
// The inequality operator != is basically the opposite of the equality operator.

function testNotEqual(val) {
    if (val != 99) {
        return "Not Equal";
    }
    return "Equal"
}

console.log("testNotEqual:", testNotEqual(10));

// Comparison with the Strict Inequality Operator
// The strict inequality operator !== is basically the opposite of the strict equality operator.

function testStrictNotEqual(val) {
    if (val !== 17) { // won't convert types
        return "Not Equal";
    }
    return "Equal";
}

console.log("testStrictNotEqual:", testStrictNotEqual(10));

// Comparisons with the Greater Than Operator

function testGreaterThan(val) {
    if (val > 100) {
        return "Over 100";
    }
    if (val > 10) {
        return "Over 10";
    }
    return "10 or Under";
}

console.log("testGreaterThan:", testGreaterThan(10));

// Comparison with the Greater Than Or Equal To Operator

function testGreaterOrEqual(val) {
    if (val >= 20) {
        return "20 or Over";
    }
    if (val >= 10) {
        return "10 or Over";
    }
    return "Less than 10";
}

console.log("testGreaterOrEqual:", testGreaterOrEqual(10));

// Comparison with the Less Than Operator

function testLessThan(val) {
    if (val < 25) {
        return "Under 25";
    }
    if (val < 55) {
        return "Under 55";
    }
    return "55 or Over";
}

console.log("testLessThan:", testLessThan(10));

// Comparison with the Less Than Or Equal To Operator

function testLessOrEqual(val) {
    if (val <= 12) {
        return "Smaller Than or Equal to 12";
    }
    if (val <= 24) {
        return "Smaller Than or Equal to 24";
    }
    return "More Than 24";
}

console.log("testLessOrEqual:", testLessOrEqual(10));
