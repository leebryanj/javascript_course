// Write Reusable Code with Functions

// Everything inside the { } will be run each time the function is run.
function ourReusableFunction() {
    console.log("Heyya, World");
}
// call the function with function name + ()
ourReusableFunction();  // here the function is called or invoked

function reusableFunction() {
    console.log("Hi World");
}
reusableFunction();

// Passing Values to Functions with Arguments
// Parameters are variables that act as placeholders for the values that are to be input to a function when it is called.
function ourFunctionWithArgs(a, b) {
    console.log(a - b);
}
ourFunctionWithArgs(10, 5); // Outputs 5

function functionWithArgs(a, b) {
    console.log(a + b);
}
functionWithArgs(10, 5);

