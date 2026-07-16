// Local Scope and Functions

// Variables that are declared within a function and function parameters have local scope. They are only visible within the function.
function myLocalScope() {
    var myVar = 5;
    console.log("local :", myVar);
}
myLocalScope();

// console.log("global: ", myVar); // myVar is not accessible here and causes an error