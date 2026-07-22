// Differences Between the var and let Keywords
// For a long time in JS, if you were going to declare a variable, you had to use the var keyword. But starting with ES6, we can now declare varialbes with let and const as well.

// let does not let you declare a variable twice.
var catName = "Quincy";
var quote;

var catName = "Beau"; // no issue here

function catTalk() {
    "use strict";

    catName = "Oliver";
    quote = catName + " says Meow!";
}
catTalk();

// If we use let:
let catNameLet = "Quincy";
let quoteLet;

// let catNameLet = "Beau"; // SyntaxError
catNameLet = "Beau"; // this is ok, just reassignment

function catTalkLet() {
    "use strict"; // this enables strict mode

    catNameLet = "Oliver";
    quote = catNameLet + " says Meow!";
}
catTalkLet();
// We usually don't want to declare a variable 2 times in the same scope.

// Compare Scopes of the var and let Keywords
// When you declare a variable with var, it is declared globally, or locally if declared inside a function.
// The scope of let is limited to the block statement of expression that is was declared in.
function checkScope() {
    "use strict";
    // var i = "function scope";
    let i = "function scope";
    if (true) {
        // i = "block scope";
        // var i = "block scope" // if we use this and comment out the above declarations (var and let i), both console logs will be "block scope". If we use let i, and also comment out all declarations above, we would get a ReferenceError.
        let i = "block scope"; // this i is scoped to this if block
        console.log("Block scope i is:", i);
    }
    console.log("Function scope i is:", i); // this will still return "block scope" if i was declared with var
    return i;
}

checkScope();

// Declare a Read-Only Variable with the const Keyowrd
// const is another way to declare a variable. It has all the features of let, but it's also read-only.
// You cannot reassign a const.
function printManyTimes(str) {
    "use strict";
    /*
    var sentence = str + " is cool!"; // first declared here
    sentence = str + " is amazing!"; // then reassigned here
    */
    const sentence = str + " is cool!"; // declare with const
    // sentence = str + " is amazing!"; // SyntaxError, cannot reassign afterwards

    // Let's also start using let for for-loops
    for (let i = 0; i < str.length; i += 2) {
        console.log(sentence);
    }
}

printManyTimes("freeCodeCamp");
// If you know for sure that you never want to reassign a variable, always use const.
// It is also common to use all caps for const variable names. const SENTENCE = ...
// From now on, we should mainly use const and let in our code. Sometimes we still use var, but most scenarios use let and const.