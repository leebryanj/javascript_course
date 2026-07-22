// Use the Conditional (Ternary) Operator
// It's like a one-line if-else expression.
// condition ? statement-if-true : statement-if-false;

function checkEqual(a, b) {
    /*
    if (a === b) {
        return true;
    } else {
        return false;
    }
    */
    // This is the same as return a === b, but just an example using the ternary operator.
    return a === b ? true : false;
}

console.log("checkEqual(1, 2):", checkEqual(1, 2));
console.log("checkEqual(1, 1):", checkEqual(1, 1));

// Use Multiple Conditional (Ternary) Operators
// You can nest ternary operators within each other.

// Return "positive", "negative" or "zero"
function checkSign(num) {
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}

console.log("checkSign(10):", checkSign(10));
console.log("checkSign(-10):", checkSign(-10));
console.log("checkSign(0):", checkSign(0));