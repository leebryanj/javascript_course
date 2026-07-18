// Returning Boolean Values from Functions

// Example: A trick if you want a function to return a boolean 
/*
if (a < b) {
    return true;
} else {
    return false;
}
    */
// All comparison operators return a boolean true or false value.
function isLess(a, b) {
    return a < b;
}

console.log("isLess(10, 15):", isLess(10, 15)); // true
console.log("isLess(10, 15):", isLess(20, 15)); // false

// Returning Early Pattern from Functions
// You can return early from a function with the return statement.
function abTest(a, b) {
    // You can leave the function anytime with a return statement.
    if (a < 0 || b < 0) {
        return undefined;
    }
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

console.log("abTest(2, 2):", abTest(2, 2)); // 8
console.log("abTest(-2, 2):", abTest(-2, 2)); // undefined

// Counting Cards Example
var count = 0;

function cc(card) {
    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--;
            break;
    }
    var holdbet = "Hold";
    if (count > 0) {
        holdbet = "Bet";
    }
    return count + " " + holdbet;
}

console.log("cc(2):", cc(2));
console.log("cc(3):", cc(3));
console.log("cc(7):", cc(7));
console.log("cc('K'):", cc('K'));
console.log("cc('A'):", cc('A'));
console.log("cc(4):", cc(4));