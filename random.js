// Generate Random Fractions with JavaScript
function randomFraction() {
    return Math.random();
}

console.log(randomFraction());

// Generate Random Whole Numbers with JavaScript
// Generate and return a random whole number in 
// the range 0 to 9

function randomWholeNum() {
    return Math.floor(Math.random() * 10);
}

console.log(randomWholeNum());


// Generate Random Whole Numbers within a Range
function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

console.log(randomRange(2, 10));

// Use the parseInt Function
const a = parseInt("007");

console.log(a);

function convertToInteger(str) {
    return parseInt(str);
}

console.log(convertToInteger("56"));


// Use the parseInt Function with a Radix
const b = parseInt('11', 2);
console.log(b);

// Convert a binary number to an integer and return it.
function convertBinaryToInteger(str) {
    return parseInt(str, 2);
}

console.log(convertBinaryToInteger("10011"));

// Use the Conditional (Ternary) Operator
function findGreater(a, b) {
    if (a > b) {
        return "a is greater";
    } else {
        return "b is greater or equal";
    }
}

console.log(findGreater(2, 4));
console.log(findGreater(4, 2));

function tFindGreater(a, b) {
    return a > b ? "a is greater" : "b is greater or equal"
}

console.log(tFindGreater(2, 4));
console.log(tFindGreater(4, 2));

function checkEqual(a, b) {
    return a == b ? "Equal": "Not Equal"
}

console.log(checkEqual(2, 4));
console.log(checkEqual(2, 2));


// Use Multiple Conditional (Ternary) Operators
function findGreaterOrEqual(a, b) {
    if (a === b) {
        return "a and b are equal";
    }
    else if (a > b) {
        return "a is greater";
    }
    else {
        return "b is greater";
    }
}

console.log(findGreaterOrEqual(2, 4));
console.log(findGreaterOrEqual(2, 2));
console.log(findGreaterOrEqual(4, 2));


function tFindGreaterOrEqual(a, b) {
    return (a === b) ? "a and b are equal" 
        : (a > b) ? "a is greater" 
        : "b is greater";  
}

console.log(tFindGreaterOrEqual(2, 4));
console.log(tFindGreaterOrEqual(2, 2));
console.log(tFindGreaterOrEqual(4, 2));


function checkSign(num) {
    return num > 0 ? "positive" 
        : num == 0 ? "zero" 
        : "negative";
}

console.log(checkSign(10));
console.log(checkSign(0));
console.log(checkSign(-10));
