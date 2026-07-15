// Arrays have 0-based indexing

// Access Array Data
var ourArray = [50, 60, 70];
var ourData = ourArray[0] // equals 50
console.log("ourData: " + ourData);

var myArray = [50, 60, 70]
var myData = myArray[0];
console.log("myData: " + myData);

// Modify Array Data
var ourArrayModify = [18, 64, 99];
ourArrayModify[1] = 45; // ourArrayModify now equals [18,45,99]
console.log("ourArrayModify: " + ourArrayModify);

var myArrayModify = [18, 64, 99];
myArrayModify[0] = 45 // myArrayModify now equals [45,64,99]
console.log("myArrayModify: " + myArrayModify);
// With strings, we could not modify them using bracket notation. With arrays, we can.

// Access Multi-Dimensional Arrays with Indexes
// An array of arrays. The last element of this array is an array with an array as an element (3-layers deep)
var myArrayMultiDimension = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [[10, 11, 12], 13, 14]];

// First bracket [0] gets the first element in the array [1, 2, 3]. Seconf bracket [0] is the index of the array within the array (value of 1).
var myDataMultiDimension = myArrayMultiDimension[0][0];
console.log("myDataMultiDimension: " + myDataMultiDimension);

// If we want to get the value 8:
var valueEight = myArrayMultiDimension[2][1];
console.log("valueEight: " + valueEight);