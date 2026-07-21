// Iterate with While Loops
// Loops allow you to run the same code multiple times.
// While loops run while a specific condition is true and stops once it's no longer true.
var myWhileArray = [];

var i = 0;
while (i < 5) {
    myWhileArray.push(i);
    i++;
}
console.log("myWhileArray:", myWhileArray);

// Iterate with For Loops
// A for loop is the most common type of loop in JavaScript.
var ourForArray = [];

for (var i = 0; i < 5; i++) {
    ourForArray.push(i);
}
console.log("ourForArray:", ourForArray);

var myForArray = [];

for (i = 1; i < 6; i++) {
    myForArray.push(i);
}
console.log("myForArray:", myForArray);

// Iterate Odd Numbers with a For Loop
// Loops don't have to increment just one at a time.
ourEvenForArray = []

for (var i = 0; i < 10; i += 2) {
    ourEvenForArray.push(i);
}
console.log("ourEvenForArray:", ourEvenForArray);

myOddForArray = [];

for (var i = 1; i < 10; i += 2) {
    myOddForArray.push(i);
}
console.log("myOddForArray:", myOddForArray);

// Count Backwards with a For Loop
// A for loop can also be used to count backwards.
ourBackwardsArray = [];

for (var i = 10; i > 0; i -= 2) {
    ourBackwardsArray.push(i);
}
console.log("ourBackwardsArray:", ourBackwardsArray);

var myBackwardsArray = [];

for (var i = 9; i > 0; i -= 2) {
    myBackwardsArray.push(i);
}
console.log("myBackwardsArray:", myBackwardsArray);

// Iterate Through an Array with a For Loop
// It is common in JS to iterate through the contents of an array.
var ourIterArr = [9, 10, 11, 12];
var ourIterTotal = 0;

for (var i = 0; i < ourIterArr.length; i++) {
    ourIterTotal += ourIterArr[i];
}

console.log("ourIterTotal:", ourIterTotal);

var myIterArr = [2, 3, 4, 5, 6];
var myIterTotal = 0;

for (var i = 0; i < myIterArr.length; i++) {
    myIterTotal += myIterArr[i];
}
console.log("myIterTotal:", myIterTotal);

// Nesting For Loops
// If you have a multidimensional or nested array, you can use nested for loops to access all the array elements.
function multiplyAll(arr) {
    var product = 1;

    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            product *= arr[i][j];
        }
    }
    return product;
}

var product = multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
console.log("product:", product);

// Iterate with Do...While Loops
// While loop first check the condition before it runs any code within the loop.
// A do-while loop always runs at least one time, and then it will check the condition.
var myDoWhileArray = [];
var i = 10;

// still runs once since the while check happens after do
do {
    myDoWhileArray.push(i);
    i++;
} while (i < 5)

console.log("i:", i, "myDoWhileArray:", myDoWhileArray);

// Profile Lookup Example
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Luke",
        "lastName": "Skywalker",
        "number": "0994372684",
        "likes": ["X-Wing", "R2D2", "C-3PO"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unkown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


// Pass in a name and a property, and it will return the value of that property
function lookUpProfile(name, prop) {
    for (var i = 0; i < contacts.length; i++) {
        if (contacts[i].firstName === name) {
            // return the value of the prop if it exists, otherwise return message
            return contacts[i][prop] || "No such property";
        }
    }
    return "No such contact";
}

var dataAkiraLikes = lookUpProfile("Akira", "likes");
console.log('Data for "Akira" "likes":', dataAkiraLikes);
dataSherlockLastname = lookUpProfile("Sherlock", "lastName");
console.log('Data for "Sherlock" "lastName":', dataSherlockLastname);
dataDoesNotExist = lookUpProfile("Sherlock", "hello");
console.log('Data for "Sherlock" "hello":', dataDoesNotExist);