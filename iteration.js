// Iterate with JavaScript While Loops
let ourArray = [];
let i = 0;

while (i < 5) {
    ourArray.push(i)
    i++;
}

console.log(ourArray);


// Add the numbers 5 through 0 (inclusive) in descending
// order to myArray using a while loop.
let myArray = [];
i = 5;

while (i >= 0) {
    myArray.push(i);
    i--;
}

console.log(myArray);


// Iterate with JavaScript For Loops
/*
for (a; b; c) where a is the initialization statement,
b is the condition statement, and c is the final expression. 
The initialization statement is executed one time only 
before the loop starts.
The conditional will allow the loop to continue as long as it
evaluates to true.
The final expression executes at the end of each iteration.
*/

let herArray = [];

for (let i = 0; i < 5; i++) {
    herArray.push(i);
}

console.log(herArray)

// Use a for loop to push the values 1 through 5 onto myArray
myArray = [];

for (let i = 1; i < 6; i++) {
    myArray.push(i);
}

console.log(myArray);


// Iterate Odd Numbers With a For Loop
ourArray = [];

for (let i = 0; i < 10; i += 2) {
    ourArray.push(i);
}

console.log(ourArray);

// Push the odd numbers from 1 through 9 to myArray using 
// a for loop.
myArray = [];
for (let i = 1; i < 10; i += 2) {
    myArray.push(i);
}

console.log(myArray);


// Count Backwards With a For Loop
ourArray = [];
for (let i = 10; i > 0; i -= 2) {
    ourArray.push(i);
}

console.log(ourArray);


// Push the odd numbers from 9 through 1 to myArray using 
// a for loop.
let myOddArray = [];
for (let i = 9; i > 0; i -= 2) {
    myOddArray.push(i);
}

console.log(myOddArray);  // [ 9, 7, 5, 3, 1 ]


// Iterate Through an Array with a For Loop
let arr = [10, 9, 8, 7, 6];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

/* 
Declare and initialize a variable total to 0. Use a for
loop to add the value of each element of the myArr array to 
total.

*/
let myArr = [2, 3, 4, 5, 6];
let total = 0;
for (let i = 0; i < myArr.length; i++) {
    total += myArr[i];
}

console.log(total);  // 20


// Nestin for Loops
arr = [
    [1, 2], [3, 4], [5, 6]
]

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        console.log(arr[i][j]);
    }
}

// Modify function multiplyAll so that it returns the 
// product of all the numbers in the sub-arrays of arr.

function multiplyAll(arr) {
    let product = 1;

    for (let i = 0; i < arr.length; i++) {
        // console.log("arr[i]", arr[i], arr[i].length);
        for (let j = 0; j < arr[i].length; j++) {
            product *= arr[i][j];
            // console.log(arr[i][j]);
            // console.log("product:", product);
        }
    }

    return product;
}

let results = multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
console.log(results);  // 5040



// Iterate with JavaScript Do...While Loops
ourArray = [];
i = 0;

do {
    ourArray.push(i);
    i++;
} while(i < 5);

console.log(ourArray);  // [ 0, 1, 2, 3, 4 ]


/*
Change the while loop in the code to a do...while loop
so the loop will push only the number 10 to myArray, and 
i will be equal to 11 when your code has finished running.
*/

myArray = [];
i = 10;

do {
    myArray.push(i);
    i++;
} while (i < 5);

console.log(myArray, i);  // [ 10 ] 11


// Replace Loops using Recursion
/*
multiply the first n elements of an array
to create the product of those elements using 
for loop.
*/

function multiply(arr, n) {
    let product = 1;
    for (let i = 0; i < n; i++) {
        product *= arr[i];
    }
    return product;
}

results = multiply(myOddArray, 5);  
console.log(results);  // 945

function rmultiply(arr, n) {
    if (n <= 0) {
        return 1;
    } else {
        return rmultiply(arr, n - 1) * arr[n - 1];
    }
}

results = rmultiply(myOddArray, 5);  
console.log(results);  // 945

// Write a recursive function, sum(arr, n), that returns the 
// sum of the first n elements of an array arr.

function sum(arr, n) {
    if (n <= 0) {
        return 0;
    } else {
        return sum(arr, n - 1) + arr[n - 1];
    }
}

results = sum(myOddArray, 5);
console.log(results);
