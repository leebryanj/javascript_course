// Example
var firstLetterOfFirstName = "";
var firstName = "Ada";

firstLetterOfFirstName = firstName[0];

// Start counting at 0 (0-based indexing) for the index of the string specified in the [] brackets
var firstLetterOfLastName = "";
var lastName = "Lovelace"

firstLetterOfLastName = lastName[0];
console.log(firstLetterOfLastName);

// Use bracket notation [] to get any character in a string
var thirdLetterOfLastName = lastName[2];
console.log(thirdLetterOfLastName);

// Use bracket notation [] to find the last character in a string (even if you don't know how many characters are in the string)
var lastLetterOfFirstName = firstName[firstName.length - 1];
console.log(lastLetterOfFirstName)
var lastLetterOfLastName = lastName[lastName.length - 1];
console.log(lastLetterOfLastName);

// Use bracket notation [] to find nth-to-last character in a string
// Just subtract however much you want from the length of the string
var thirdToLastLetterOfFirstName = firstName[firstName.length - 3];
console.log(thirdToLastLetterOfFirstName);
var secondToLastLetterOfLastName = lastName[lastName.length - 2];
console.log(secondToLastLetterOfLastName);