// Global Scope and Functions
// Scope refers to the visibility of the variables.
// Variables which are defined outside of a function block have global scope.
// Global scope means they can be seen everywhere in your JavaScript code.

// Declare variable here
var myGlobal = 10;

function fun1() {
    // Assign 5 to oopsGlobal here
    oopsGlobal = 5;
}
// oopsGlobal was defined without a var keyword.
// Normally, if you do use var, since oopsGlobal = 5 is within a function, it will be scoped to that function, and we wouldn't be able to access it in fun2.
// However, since we forgot var, it becomes global automatically.

function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}
// Since myGlobal has global scope, myGlobal can be accessed inside fun2().

fun1();
fun2();