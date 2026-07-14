// When you have characters surrounded by "" or '', they are strings. These are called string literals.

// Declare String Variables
var firstName = "Alan";
var lastName = "Turing";

var myFirstName = "Bryan";
var myLastName = "Lee";

// Escaping Literal Quotes in Strings

// Use the backslash \ escape character to show the double quotes inside the string
var myStr = "I am a \"double quoted\" string inside \"double quotes\"";
console.log(myStr);

// Quoting String with Single Quotes

var myUrlStr = "<a href\"http://www.example.com\" target=\"_blank\">Link</a>";
console.log(myUrlStr);

// Use single quotes to surround the string to use double quotes inside the string
var myUrlStrSingleQuotes = '<a href"http://www.example.com" target="_blank">Link</a>';
console.log(myUrlStrSingleQuotes);

// Use backticks to be able to use single and double quotes inside the string
var myUrlStrBackticks = `'<a href"http://www.example.com" target="_blank">Link</a>'`;
console.log(myUrlStrBackticks);