// Build JavaScript Objects
// Objects are similar to arrays, except that instead of using indexes to access data, you use properties.
var ourDog = {
    // Everything before the colon : is a property name/key and can be an identifier, a string, or Symbol.
    // Values are the things after the colon : and can be any JS data type.
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};

var myDog = {
    "name": "Quincy",
    "legs": 4,
    "tails": 1,
    "friends": []
}

// Accessing Object Properties with Dot Notation
// There are 2 main ways to access a property on an object. First is dot notation.
var testObjDot = {
    "hat": "ballCap",
    "shirt": "jersey",
    "shoes": "cleats"
};

var hatValue = testObjDot.hat; // object dot property name
var shirtValue = testObjDot.shirt;
console.log("hatValue:", hatValue); // ballCap
console.log("shirtValue:", shirtValue); // jersey

// Accessing Object Properties with Bracket Notation
// Besides using dot notation, the 2nd way is to use bracket notation to access a property in an object.
var testObjBracket = {
    // Bracket notation is required when the property name has a space in it.
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
};

var entreeValue = testObjBracket["an entree"];
var drinkValue = testObjBracket["the drink"];
console.log("entreeValue:", entreeValue); // hamburger
console.log("drinkValue:", drinkValue); // water