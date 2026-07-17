// Instead of using chained else-if statements, you can use a switch statement.
// A switch statement tests a vlaue, and you can have many case statements which define various possible values.
/*
Write a switch statement which tests val and sets answer for the following conditions:
1 - "alpha"
2 - "beta"
3 - "gamma"
4 - "delta"
*/
function caseInSwitch(val) {
    var answer = "";
    // compare val to the different cases we have
    switch (val) {
        case 1: // same as strict equality ===
            answer = "alpha";
            break; // break means we are at the end of the case statement. We go to the end of the switch statement, and we dont evaluate anything else in the switch statement.
        case 2:
            answer = "beta";
            break; // If you don't have a break, it will run through to the next case statement automatically, running the code inside the case (without even checking the case/===).
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
    }
    return answer;
}

console.log("caseInSwitch(1):", caseInSwitch(1)); // alpha
console.log("caseInSwitch(2):", caseInSwitch(2)); // beta
console.log("caseInSwitch(3):", caseInSwitch(3)); // gamma
console.log("caseInSwitch(4):", caseInSwitch(4)); // delta

// Default Option in Switch Statements
// Default option is similar to else in an if else statement.
function switchOfStuff(val) {
    var answer = "";
    switch (val) {
        case "a":
            answer = "apple";
            break;
        case "b":
            answer = "bird";
            break;
        case "c":
            answer = "cat";
            break;
        default: // return when "a", "b", or "c" is not true
            answer = "stuff";
            break;
    }
    return answer;
}

console.log("switchOfStuff(a):", switchOfStuff("a")); // apple
console.log("switchOfStuff(2):", switchOfStuff("2")); // stuff
console.log("switchOfStuff(5):", switchOfStuff("5")); // stuff
console.log("switchOfStuff(c):", switchOfStuff("c")); // cat

// Multiple Identical Options in Switch Statements
// Sometimes you want a switch statement where multiple inputs give the same output. You can do this by omitting the break statement.
function sequentialSizes(val) {
    var answer = "";
    switch (val) {
        case 1: // If it's 1, it'll pass through 2 & 3
        case 2:
        case 3:
            answer = "Low"
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid"
            break;
        case 7:
        case 8:
        case 9:
            answer = "High"
            break;
    }
    return answer;
}
// 1, 2, 3 returns "Low", 4, 5, 6 returns "Mid", 7, 8, 9 returns "High"
console.log("sequentialSizes(1):", sequentialSizes(1)); // Low
console.log("sequentialSizes(5):", sequentialSizes(5)); // Mid
console.log("sequentialSizes(8):", sequentialSizes(8)); // High

// Replacing If Else Chains with Switch
// Sometimes a switch statement can be easier to write and easier to understand than a chain of if else statements.
/*
if (val === "bob") {
    answer = "Marley";
} else if (val === 42) {
    answer = "The Answer";
} else if (val === 1) {
    answer = "There is no #1";
} else if (val === 99) {
    answer = "Missed me by this much!";
} else if (val === 7) {
    answer = "Ate Nine";
}
*/
function chainToSwitch(val) {
    var answer = "";
    switch (val) {
        case "bob":
            answer = "Marley";
            break;
        case 42:
            answer = "The Answer";
            break;
        case 1:
            answer = "There is no #1";
            break;
        case 99:
            answer = "Missed me by this much!";
            break;
        case 7:
            answer = "Ate Nine";
            break;
    }
    return answer;
}

console.log("chainToSwitch(7):", chainToSwitch(7)); // Ate Nine