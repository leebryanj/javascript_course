// Use class Syntax to Define a Constructor Function
// ES6 provides a syntax to create objects using the class keyword.

// Here's the older way to create an object:
// Constructor function
var SpaceShuttle = function (targetPlanet) {
    this.targetPlanet = targetPlanet;
}
var zeus = new SpaceShuttle("Jupiter"); // Instatiate a SpaceShuttle object using the new keyword
console.log(zeus.targetPlanet);

// The class syntax replaces the constructor function creation.
class NewSpaceShuttle {
    constructor(newTargetPlanet) {
        this.newTargetPlanet = newTargetPlanet;
    }
}
var ship = new NewSpaceShuttle("Mars");
console.log(ship.newTargetPlanet);


// Another Example
function makeClass() {
    class Vegetable {
        constructor(name) {
            this.name = name;
        }
    }
    return Vegetable;
}
const Vegetable = makeClass(); // makeClass() returns the class itself, not an object.
const carrot = new Vegetable("carrot"); // Since Vegetable now refers to a class, you can now create objects
console.log(carrot.name);

// The class Vegetable has block scope inside the function. Outside the function it doesn't exist.
// If it wasn't wrapped inside a function, you could just do:
/*
class Vegetable {
    constructor(name) {
        this.name = name;
    }
}
const carrot = new Vegetable("carrot");
*/
// No makeClass() needed. This example shows us:
// 1. Classes are values.
// 2. Classes can be returned from functions.
// 3. Variables can store classes.
// 4. You can instantiate a class stored in a variable.