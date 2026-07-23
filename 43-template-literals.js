// Create Strings using Template Literals
// Template literls are a special type of string that makes creating complex strings easier.
// You make them using the backtick `
const person = {
    name: "Zodiac Hasbro",
    age: 56
};

// Template literal with multi-line and string interpolation
const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;
console.log(greeting);
// You can also add single and double quotation marks in the string ' " without escaping them.
// Put variables right in the string inside the ${}

const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["id-blacklist", "no-dup-keys"]
};
// Create a list based on the array that's passed in
function makeList(arr) {
    const resultDisplayArray = [];
    for (let i = 0; i < arr.length; i++) {
        resultDisplayArray.push(`<li class="text-warning>${arr[i]}</li>`);
    }
    return resultDisplayArray;
}
/*
makeList(result.failure) should return:
[ `<li class="text-warning">no-var</li>,
  `<li class="text-warning">var-on-top</li>,
  `<li class="text-warning">linebreak<li> ]
 */
// Each element in the array is a template literal that has some HTML in it with values from values passed in.
const resultDisplayArray = makeList(result.failure);
console.log(resultDisplayArray);