// Write Concise Declarative Functions
// An object can contain a function.
// This is the long way to put a function within an object:
const bicycle = {
    gear: 2,
    setGear: function (newGear) {
        "use strict";
        this.gear = newGear;
    }
};
bicycle.setGear(3);
console.log("bicycle.gear:", bicycle.gear);

// A simpler way:
const bicycleDeclarative = {
    gear: 2,
    setGear(newGear) { // just remove : and function
        "use strict";
        this.gear = newGear;
    }
};
bicycleDeclarative.setGear(4);
console.log("bicycleDeclarative.gear:", bicycleDeclarative.gear);