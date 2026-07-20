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

// Accessing Object Properties with Variables
// Bracket notation can also be used to look up object properties using varialbes.
var testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};

var playerNumber = 16;
var player = testObj[playerNumber]; // Use variable with [] to look up object property
console.log("player:", player);

// Updaming Object properties
// Dot notation can be used to update object propertie values
var ourDogProps = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
}

ourDogProps.name = "Happy Camper";
console.log("ourDogProps.name:", ourDogProps.name);

myDogProps = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};

myDogProps.name = "Happy Coder";
console.log("myDogProps.name:", myDogProps.name);

// Add New Properties to an Object
// Use dot notation of brakcet notation to add new properties to an object.
var ourDogAddProps = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};

ourDogAddProps.bark = "bow-wow"; // Add new property using dot notation
console.log("ourDogAddProps.bark:", ourDogAddProps.bark);

var myDogAddProps = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};

myDogAddProps["bark"] = "woof!"; // Add new property using bracket notation
console.log("myDogAddProps.bark:", myDogAddProps.bark);

// Delete Properties From an Object
// Use delete keyword
var ourDogDeleteProp = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};

delete ourDogDeleteProp.bark;
console.log("ourDogDeleteProp: ", ourDogDeleteProp)

var myDogDeleteProp = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"],
    "bark": "woof!"
};

delete myDogDeleteProp.tails;
console.log("myDogDeleteProp: ", myDogDeleteProp)

// Using Objects for Lookups
// Objects can be thought of as a key-value storage, like a dictionary.
// we can replace the switch statement with an object, and use the object for lookups instead of the switch statement.
function phoneticLookup(val) {
    var result = "";

    var lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank"
    };
    /*
    switch (val) {
        case "alpha":
            result = "Adams";
            break;
        case "bravo":
            result = "Boston";
            break;
        case "charlie":
            result = "Chicago";
            break;
        case "delta":
            result = "Denver";
            break;
        case "echo":
            result = "Easy";
            break;
        case "foxtrot":
            result = "Frank";
            break;
    }
    */
    result = lookup[val];
    return result;
}

console.log('phoneticLookup("charlie"):', phoneticLookup("charlie"));
console.log('phoneticLookup("foxtrot"):', phoneticLookup("foxtrot"));