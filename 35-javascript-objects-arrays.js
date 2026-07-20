// Testing Objects for Properties
// You can check if an object has a property with the hasOwnProperty() method.

var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sligh"
};

function checkObj(checkProp) {
    if (myObj.hasOwnProperty(checkProp)) {
        // return the value of that property
        return myObj[checkProp];
    } else {
        return "Not Found";
    }
}

console.log('checkObj("gift")):', checkObj("gift"));
console.log('checkObj("hello")):', checkObj("hello"));

// Manipulating Complex Objects
// A JavaScript object is a way to store flexible data (strings, numbers, arrays, other objects).

// inside the array are objects
var myMusic = [
    {
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 1973,
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
        "gold": true
    },
    {
        "artist": "Beau Carnes",
        "title": "Cereal Man",
        "release_year": 2003,
        "formats": [
            "YouTube video",
        ],
        "gold": false
    }
];

// Accessing Nested Objects

// An object with another object nested inside
var myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};

var gloveBoxContents = myStorage.car.inside["glove box"]; // have to use [] notation becuase there is a space
console.log("gloveBoxContents:", gloveBoxContents);

// Accessing Nested Arrays
// Array bracket notation can be changed to access nested arrays.
myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];

var secondTree = myPlants[1].list[1];
console.log("secondTree:", secondTree);

// Record Collection Example
// We are given this object. Each record has an ID but has different amounts of information. We create a updateRecords function with id, prop, value parameters, and it will update our record collection with the prop and value.
var collection = {
    "2548": {
        "album": "Slippery When Wet",
        "artist": "Bon Jovi",
        "tracks": [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    "2468": {
        "album": "1999",
        "artist": "Prince",
        "tracks": [
            "1999",
            "Little Red Corvette"
        ]
    },
    "1245": {
        "artist": "Robert Palmer",
        "tracks": []
    },
    "5439": {
        "album": "ABBA Gold"
    }
};

// Keep a copy of the original collection object for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Update the collection and return the full collection. If value is empty string, it should delete that property. If we have property of tracks with a value, it should just add that track to the end of the tracks array.
function updateRecords(id, prop, value) {
    if (value === "") {
        delete collection[id][prop];
    } else if (prop === "tracks") {
        // tracks Equal itself if it exists, otherwise create it
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);
    } else {
        // just set the property to equal the value
        collection[id][prop] = value;
    }
    return collection;
}
console.log('updateRecords(2468, "tracks", "test"):', updateRecords(2468, "tracks", "test"));
console.log('updateRecords(5439, "artist", "ABBA"):', updateRecords(5439, "artist", "ABBA"));