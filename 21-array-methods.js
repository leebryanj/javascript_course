// We can append data to the end of an array with the push() function
var ourArrayPush = ["Stimpson", "J", "cat"];
ourArrayPush.push(["happy", "joy"]);
// ourArrayPush now equals ["Stimpson", "J", "cat", ["happy", "joy"]]
console.log("ourArrayPush: ", ourArrayPush);

var myArrayPush = [["John", 23], ["cat", 2]];
myArrayPush.push(["dog", 3]);
console.log("myArrayPush: ", myArrayPush);


// We can remove the last element from our array with the pop() function
var ourArrayPop = [1, 2, 3];
var removedFromOurArrayPop = ourArrayPop.pop();
// removedFromOurArrayPop now equals 3, and ourArrayPop now equals [1, 2]
console.log("removedFromOurArrayPop", removedFromOurArrayPop);
console.log("ourArrayPop: ", ourArrayPop)

var myArrayPop = [["John", 23], ["cat", 2]];
var removedFromMyArrayPop = myArrayPop.pop();
console.log("myArrayPop: ", myArrayPop);

// The shift() function removes the first element of the array
var ourArrayShift = ["Stimpson", "J", ["cat"]];
var removedFromOurArrayShift = ourArrayShift.shift();
// removedFromOurArrayShift now equals "Stimpson" and ourArrayShift now equals ["J", ["cat"]]
console.log("ourArrayShift: ", ourArrayShift);
console.log("removedFromOurArrayShift: ", removedFromOurArrayShift);

var myArrayShift = [["John", 23], ["dog", 3]];
var removedFrommyArrayShift = myArrayShift.shift();
console.log("myArrayShift: ", myArrayShift);
console.log("removedFrommyArrayShift: ", removedFrommyArrayShift);

// The unshift() function adds an element to the beginning of the array
var ourArrayUnshift = ["Stimpson", "J", "cat"];
ourArrayUnshift.shift(); // ourArrayUnshift now equals ["J", "cat"]
ourArrayUnshift.unshift("Happy"); // ourArrayUnshift now equals ["Happy, "J", "cat"]
console.log("ourArrayUnshift: ", ourArrayUnshift);

var myArrayUnshift = [["John", 23], ["dog", 3]];
myArrayUnshift.shift();
myArrayUnshift.unshift(["Paul", 35]);
console.log("myArrayUnshift: ", myArrayUnshift);