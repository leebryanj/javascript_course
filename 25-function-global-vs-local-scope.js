// Global vs Loval Scope in Functions
// It is possible to have global and local variables with the same name.
// The local variable takes precedent over the global variable.

var outerWear = "T-Shirt"; // global variable

function myOutfit() {
    var outerWear = "Sweater"
    return outerWear;
}

console.log(myOutfit()); // outputs "Sweater" because local variable took precedence over the global variable.
console.log(outerWear); // outputs "T-Shirt"