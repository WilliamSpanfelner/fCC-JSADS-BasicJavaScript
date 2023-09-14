// Store Multiple Values in one Variable using Javascript Arrays
const sandwich = ["peanut butter", "jelly", "bread"];

// Nest one Array within another Array
const teams = [["Bulls", 23], ["White Sox", 45]]

// Access Array Data with Indexes
const hisArray = [50, 60, 70];
const hisData = hisArray[1];
console.log(hisArray[0], hisData);

// Modify Array Data With Indexes
// Arrays are mutable even if the array was declared with const
hisArray[0] = 15;
console.log(hisArray);

// Access Multi-Dimensional Arrays with Indexes
let herArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14]
];
const subarray = herArray[3];
const nestedSubarray = herArray[3][0];
const element = herArray[3][0][1];
console.log(subarray, nestedSubarray, element)


// Manipulate Arrays With push Method
herArray.push([4, 5]);
console.log(herArray[4][1]);

const arr1 = ["Stimpson", "J", "cat"];
arr1.push(["happy", "joy"]);
console.log(arr1);

// Manipulate Arrays With pop Method
const arr2 = arr1.pop();
console.log(arr2);
console.log(arr1);

// Manipulate Arrays with shift Method
// shift removes the first element and works similar to the pop method
const removedFromArr1 = arr1.shift();
console.log(removedFromArr1)
console.log(arr1)

// Manipulate Arrays With unshift Method
// unshift works like the push method but adds elements to the front of an array.
arr1.shift();
arr1.unshift("Happy");
console.log(arr1);

// Shopping LIst
const shoppingList = [
    ["Chocolate Bar", 15], 
    ["Eggs", 12], 
    ["Onions", 5], 
    ["Apples", 7],
    ["Bananas", 7]
];
