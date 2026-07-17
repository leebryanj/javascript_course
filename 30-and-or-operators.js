// Comparisons with the Logical And Operator
// Sometimes you want to check if two things are true at the same time.
// Locical And Operator &&

function testLogicalAnd(val) {
    if (val <= 50 && val >= 25) {
        return "Yes";
    }
    return "No";
}

console.log("testLogicalAnd:", testLogicalAnd(10));

// Comparisons with the Logical Or Operator
// Logical Or Operator ||

function testLogicalOr(val) {
    if (val < 10 || val > 20) {
        return "Outside";
    }
    return "Inside";
}

console.log("testLogicalOr:", testLogicalOr(15));