// Return a Value from a Function With Return

// You can return a value from a function with return statement.
function minusSeven(num) {
    return num - 7; // return statement
}

console.log("minusSeven(10)", minusSeven(10));

function timesFive(num) {
    return num * 5;
}

console.log("timesFive(5)", timesFive(5));

// Understanding Undefined Value Returned from a Function

// Functions can have return statements, but they don't have to.
// In this case, this function adds 3 to the sum variable (which is global), it does not return anything. If you don't specify a return value, the return value is just undefined.
var sum = 0;
function addThree() {
    sum = sum + 3;
}

function addFive() {
    sum = sum + 5;
}

console.log(addFive()); // returns undefined

// Assignment with a Returned Value

var changed = 0;

function change(num) {
    return (num + 5) / 3;
}
// When we call the function change and pass in the value 10, the value that is returned from the function is going to be stored in the variable changed.
changed = change(10);
console.log("changed:", changed);

var processed = 0;

function processArg(num) {
    return (num + 3) / 5;
}
processed = processArg(7);
console.log("processed:", processed);

// Stand in Line Example
// In computer science, a queue is an abstract data structure where items are kept in order. New items can be added to the back of the queue, and old items are taken off from the front of the queue.

// You can add an item to the arr that's passed in, then you return the first item on the list
function nextInLine(arr, item) {
    arr.push(item);
    return arr.shift();;
}

var testArr = [1, 2, 3, 4, 5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: ", JSON.stringify(testArr));