// Write Reusable JavaScript with Functions
function functionName() {
    console.log("Hello World!");
}

functionName();

// Passing Values to Functions with Arguments
function testFun(param1, param2) {
    console.log(param1, param2);
}

testFun("Hello", "World");

function testWithArgs(num1, num2) {
    console.log(num1 + num2);
}

testWithArgs(3, 3);

// Return a Value from a Function with Return
function plusThree(num) {
    return num + 3;
}

const answer = plusThree(5);
console.log(answer);

// Global Scope and Functions
/*
Global vars can be defined outside a function using let or const keywords.
Vars defined without the var, let or const keywords automatically have 
global scope.
*/

// Local Scope and Functions
/* Vars declared within a function, as well as the function parameters 
have local scope. */

function myTest() {
    const loc = "foo";
    console.log(loc);
}

myTest();
// console.log(loc);  // referenceerror: loc is not defined

// Global vs. Local Scope in Functions
const someVar = "Hat";

function myFun() {
    const someVar = "Head";
    return someVar
}

console.log(myFun());

// Understanding Undefined Value returned from a Functin
let sum = 0;

function addSum(num) {
    sum += num;
}

console.log(addSum(3));

// Assignment with a Returned Value
function sumArgs(num1, num2) {
    return num1 + num2;
}
ourSum = sumArgs(5, 12);
console.log(ourSum);