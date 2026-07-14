// Concatenate strings using the + operator
var ourStr = "I come first. " + "I come second.";
console.log(ourStr);

var myStr = "This is the start. " + "This is the end.";
console.log(myStr);

// Concatenating Strings with += Operator
var ourStrFirst = "I come first. "
ourStrFirst += "I come second.";
console.log(ourStrFirst);

var myStrFirst = "This is the first setence. ";
myStrFirst += "This is the second sentence.";
console.log(myStrFirst);

// Constructing Strings with Variables
var ourName = "freeCodeCamp";
var ourStrName = "Hello our name is " + ourName + ", how are you?";
console.log(ourStrName);

var myName = "Bryan";
var myStrName = "My name is " + myName + " and I am well!";
console.log(myStrName);

// Appending Variables to Strings
// You can append variables to strings using the += operator.
var anAdjective = "awesome!"
var ourStrAdjective = "freeCodeCamp is"
ourStrAdjective += anAdjective;
console.log(ourStrAdjective);

var someAdjective = "worthwhile";
var myStrAdjective = "Learning to code is ";
myStrAdjective += someAdjective;
console.log(myStrAdjective);