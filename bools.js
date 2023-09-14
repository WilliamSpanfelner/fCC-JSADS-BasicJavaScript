// Understanding Boolean Values
function welcomeToBooleans() {
    return !false;
}

console.log(welcomeToBooleans());

// Use Conditional Logic with If Statements
function test(myCondition) {
    if (myCondition) {
        return "It was true";
    }
    return "It was false";
}

console.log(test(true));
console.log(test(false));

// Comparison with the Equality Operator
/* The equality operator performs a type conversion to coerce values to equality */
function equalityTest(myVal) {
    if (myVal == 10) {
        return "Equal";
    }
    return "Not Equal";
}

console.log(equalityTest(10));
console.log(equalityTest("10"));
console.log(equalityTest(11));

// Comparison with the Strict Equality Operator
/* No coercion happens here. */

function strictEqualityTest(myVal) {
    if (myVal === 10) {
        return "Equal";
    }
    return "Not Equal";
}

console.log(strictEqualityTest(10));
console.log(strictEqualityTest("10"));
console.log(strictEqualityTest(11));


// Practice comparing different values
console.log(typeof(3));  // number
console.log(typeof("3"));  // string


// Comparison with the Inequality Operator
// performs type coercion
function testNotEqual(val) {
    if (val != 99) {
        return "Not Equal";
    }
    return "Equal";
}

console.log(testNotEqual(10));
console.log(testNotEqual("99"));


// Comparison with the Strict Inequality Operator
// No coercion here
function testStrictNotEqual(val) {
    if (val !== 17) {
        return "Not Equal";
    }
    return "Equal";
}
console.log(testStrictNotEqual(10));
console.log(testStrictNotEqual("17"));

// Comparison with the Greater Than Operator
function testGreaterThan(val) {
    if (val > 100) {
        return "Over 100"
    }
    if (val > 10) {
        return "Over 10"
    }
    return "10 or Under"
}

console.log(testGreaterThan(10))

// Comparison with the Greater Than or Equal To Operator
function testGreaterOrEqual(val) {
    if (val >= 20) {
        return "20 or Over";
    }
    if (val >= 10) {
        return "10 or Over";
    }
    return "Less than 10";
}

console.log(testGreaterOrEqual(10));

// Comparison with the Less Than Operator
function testLessThan(val) {
    if (val < 25) {
        return "Under 25";
    }
    if (val < 55) {
        return "Under 55";
    }
    return "55 or Over";
}

console.log(testLessThan(10));

// Comparison with the Less Than Or Equal To Operator
function testLessOrEqual(val) {
    if (val <= 12) {
        return "Smaller than or equal to 12";
    }
    if (val <= 24) {
        return "Smaller Than or Equal to 24";
    }
    return "More Than 24";
}

console.log(testLessOrEqual(10));

// Comparison with the Logical And Operator
function testLogicalAnd(val) {
    if (val <= 50 && val >= 25) {
        return "Yes";
    }
    return "No";
}

console.log(testLogicalAnd(10));

// Comparisons with the Logical Or Operator
function testLogicalOr(val) {
    if (val < 10 || val > 20) {
        return "Outside";
    }
    
    // if (val < 10) {
    //     return "Outside"; 
    // }
    // if (val > 20) {
    //     return "Outside"
    // }
    return "Inside";
}

console.log(testLogicalOr(15))


// Introducing Else Statements
function testElse(val) {
    let result = "";

    if (val > 5) {
        result = "Bigger than 5";
    } else {
        result = "5 or Smaller";
    }
    return result;
}
console.log(testElse(4));

// Introducing Else If Statements
function testElseIf(val) {
    if (val > 10) {
        return "Greater than 10";
    } else if (val < 5) {
        return "Smaller than 5";
    } else {
        return "Between 5 and 10";
    }
}

console.log(testElseIf(7));

// Logical Order in If Else Statements
function orderMyLogic(val) {
    if (val < 5) {
        return "Less than 5";
    } else if (val < 10) {
        return "Less than 10";
    } else {
        return "Greater than or equal to 10";
    }
}

console.log(orderMyLogic(7));

// Chaining If Else Statements
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

console.log(testSize(7));

//  Golf code
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"]

function golfScore(par, strokes) {
    let scoreName = strokes - par; 
    if (strokes == 1) {
        return names[0];
    } else if (scoreName <= -2 ) {
        return names[1];
    } else if (scoreName == -1 ) {
        return names[2];
    } else if (scoreName == 0 ) {
        return names[3];
    } else if (scoreName == 1) {
        return names[4];
    } else if (scoreName == 2) {
        return names[5];
    } else if (scoreName >= 3){
        return names[6];
    }
}

console.log(golfScore(5, 1))

// Selecting from Many Options with Switch Statements
function idFruit(fruit) {
    switch (fruit) {
    case "apple":
        console.log("The fruit is an apple");
        break;

    case "orange":
        console.log("The fruit is an orange");
        break;

    default:
        console.log("Don't know that fruit");
        break;
    }
}

idFruit("apple");
idFruit("orange");
idFruit("pear");

function caseInSwitch(val) {
    let answer = "";
    switch (val) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
    
        default:
            break;
    }
    return answer;
}

console.log(caseInSwitch(1));
console.log(caseInSwitch(2));
console.log(caseInSwitch(3));
console.log(caseInSwitch(4));


// Adding a Default Option in Switch Statements
function switchOfStuff(val) {
    let answer = "";
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
                
        default:
            answer = "stuff";
            break;
    }
    return answer;
}

console.log(switchOfStuff(1));
console.log(switchOfStuff("a"));
console.log(switchOfStuff("b"));
console.log(switchOfStuff("c"));


// Multiple Identical Options in Switch Statements
function sequentialSizes(val) {
    let answer = "";

    switch (val) {
        case 1:
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
            
        default:
            break;
    }
    return answer;
}

console.log(sequentialSizes(1));
console.log(sequentialSizes(5));
console.log(sequentialSizes(9));


// Replacing If Else Chains with Switch
function chainToSwitch(val) {
    let answer = "";

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
        default:
            break;
    }
    return answer
}

console.log(chainToSwitch(7));


// Returning Boolean Values from Functions
function isLess(a, b) {
    return a < b;
}

console.log(isLess(10, 15));

// Return Early Pattern for Functions
function abTest(a, b) {
    if (a < 0 || b < 0) {
        return undefined;
    }
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

console.log(abTest(2, 2));
console.log(abTest(0, 0));


// Counting Cards
let count = 0;

function cc(card) {
    let result = "";
    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count += 1;
            break;
        case 10:
        case 'J':
        case 'Q':
        case 'K':
        case 'A':
            count -= 1;
            break;
    
        default:
            break;
    }

    if (count > 0) {
        return count + " Bet";
    } else {
        return count + " Hold"; 
    } 
}

console.log(cc(2), cc(3), cc(7), cc('K'), cc('A'));
