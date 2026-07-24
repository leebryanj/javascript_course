// Use getters and setters to Control Access to an Object
// With the class object, you often want to obtain values from the object and set a value of a property within an object.
// These are often called getters and setters.

class Book {
    constructor(author) {
        this._author = author; // private variable
    }
    // getter
    get writer() {
        return this._author;
    }
    // setter
    set writer(updatedAuthor) {
        this._author = updatedAuthor
    }
}
// getter functions are meant to simply get the value of an object's private variable to the user, without the user directly accessing the private variable.
// In the above example, you never interact firectly with the _author private variable.

// Another Example
// Accepts temperature in fahrenheit, returns temperature in celcius
function makeClass() {
    class Thermostat {
        constructor(temp) {
            this._temp = 5 / 9 * (temp - 32); // this means this variable is only accessible within this class. variable starting with underscore signifies that it's a private variable.
        }
        get temperature() {
            return this._temp; // stored in celsius
        }
        set temperature(updatedTemp) {
            this._temp = updatedTemp;
        }
    }
    return Thermostat;
}

const Thermostat = makeClass();
const thermos = new Thermostat(76); // always use new when instantiating a new object
let temp = thermos.temperature; // uses the getter get temperature(). There are no () since getters and setters are accessed similar to properties.
thermos.temperature = 26; // using the setter (temp already in celsius)
temp = thermos.temperature;
console.log("temp after setting:", temp)