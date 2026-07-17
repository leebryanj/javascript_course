// Use Conditional Logic with If Statements
// An if statement is used to make decisions in code. They keyword if tells JavaScript to execute the code in the { } under certain conditions defined in the ( ).

function outTrueOrFalse(isItTrue) {
    if (isItTrue) {
        return "Yes, it's true";
    }
    return "No, it's false";
}

function trueOrFalse(wasThatTrue) {
    if (wasThatTrue) {
        return "Yes, that was true";
    }
    return "No, that was false";
}

console.log(trueOrFalse(true));
console.log(trueOrFalse(false));