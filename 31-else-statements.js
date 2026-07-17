// Else Statements
// When an if statement it true, normally the block of code right after the if statement will be evaluated. If it's not true, nothing happens.
// But with an else statement, an alternate block of code can be executed when the if statement is not true.

function testElse(val) {
    var result = "";

    if (val > 5) {
        result = "Bigger than 5";
    } else {
        result = "5 or Smaller";
    }
    return result;
}

console.log("testElse:", testElse(4));

// Else If Statements
// If you have multiple conditions that need to be addressed, you can use else if statements. It's a way of chaning if statements together.

function testElseIf(val) {
    if (val > 10) {
        return "Greater than 10";
    } else if (val < 5) {
        return "Smaller than 5";
    } else {
        return "Between 5 and 10";
    }
}

console.log("testElseIf:", testElseIf(7));

// Logical Order in If Else Statements
// When you're using else if statements, order is very important
// Order of this logic matters:
//     if (val < 10) {
//         return "Less than 10";
//     } else if (val < 5) {
//         return "Less than 5";
//     }
// The above would be wrong if you called orderMyLogic(3), since it's less than 10, the else if would never be reached.
function orderMyLogic(val) {
    if (val < 5) {
        return "Less than 5";
    } else if (val < 10) {
        return "Less than 10";
    } else {
        return "Greater than or equal to 10";
    }
}

console.log("orderMyLogic:", orderMyLogic(3));

// Chaining If Else Statements
/*
Write chained if/else if statements to fulfill the following conditions:

num < 5 - return "Tiny" 
num < 10 - return "Small" 
num < 15 - return "Medium" 
num < 20 - return "Large" 
num >= 20 - return "Huge" 
*/
function testSize(num) {
    if (num < 5) {
        return "Tiny";
    } else if (num < 10) {
        return "Small";
    } else if (num < 15) {
        return "Medium";
    } else if (num < 20) {
        return "Large";
    } else {
        return "Huge";
    }
}

console.log("testSize:", testSize(7));
console.log("testSize:", testSize(20));
console.log("testSize:", testSize(19));
console.log("testSize:", testSize(3));

// Golf Code Example
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
/*
Strokes     Return
1           "Hole-in-one!"
<= par - 2  "Eagle"
par - 1     "Birdie"
par         "Par"
par + 1     "Bogey"
par + 2     "Double Bogey"
>= par + 3  "Go Home!"
*/
function golfScore(par, strokes) {
    if (strokes == 1) {
        return names[0];
    } else if (strokes <= par - 2) {
        return names[1];
    } else if (strokes == par - 1) {
        return names[2];
    } else if (strokes == par) {
        return names[3];
    } else if (strokes == par + 1) {
        return names[4];
    } else if (strokes == par + 2) {
        return names[5];
    } else if (strokes >= par + 3) {
        return names[6];
    }
}

console.log(golfScore(5, 4)); // Birdie
console.log(golfScore(5, 2)); // Eagle
console.log(golfScore(5, 8)); // Go Home!