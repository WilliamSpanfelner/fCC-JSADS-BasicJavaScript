// Use Recursion to Create a Countdown
function countup(n) {
    if (n < 1) {
        return [];
    } else {
        const countArray = countup(n - 1);
        console.log(countArray, n);
        countArray.push(n);
        // console.log(countArray);
        return countArray;
    }
}
// console.log(countup(5));


function countdown(n) {
    if (n < 1) {
        return [];
    } else {
        const countArray = countdown(n - 1);
        console.log("recursive", n);
        countArray.unshift(n);
        return countArray;
    }
}

// console.log(countdown(5));


// Use Recursion to Create a Range of Numbers
/**
 * 
 * @param {*} startNum 
 * @param {*} endNum 
 * @returns an array of integers which begin with startNum and ends with endNum
 * The code should also work where startNum and endNum are equal.
 */
function rangeOfNumbers(startNum, endNum) {
    if (startNum > endNum) {
        return []; 
    } else {
        const countArray = rangeOfNumbers(startNum + 1, endNum);
        countArray.unshift(startNum);
        return countArray;
    }
};

// console.log(rangeOfNumbers(1, 1));


// Reverse a string
// testString = "12345"
testString = "Hello"

function reverseString(element) {
    
    // if (element < 0) {
    //     return [];
    // } else {
    //     const charArray = reverseString(element - 1);
    //     charArray.unshift(testString[element]);
    //     return charArray;
    // }

    if (element < 0) {
        return "";
    } else {
        let newString = reverseString(element - 1);
        newString = testString[element];
        return newString
    }   
}
// reverse cleanString

// console.log(testString.length - 1);
// console.log(reverseString(testString.length - 1));
// newStringArray = reverseString(testString.length - 1);
// newString = "";
// for (const char of newStringArray) {
//     newString += char
// }

newString = reverseString(testString.length - 1);
console.log(newString);