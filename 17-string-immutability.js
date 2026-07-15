// Strings are immutable, meaning they cannot be altered once created. This does not mean that they cannot be changed, just that the individual characters of the string literal cannot be changed.
var myStr = "Jello World"

myStr[0] = "H"; // Fix me (this will cause an error because of the immutability of strings)
// We can still change myStr to "Hello World", but we cannot just change an individual character like that.
// We need to do:
myStr = "Hello World";
console.log(myStr);