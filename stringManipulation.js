
// Escaping Literal Quotes in Strings
const sampleStr = "Alan said, \"Peter is learning JavaScript\".";
console.log(sampleStr);

const myStr = "I am a \"double quoted\" string inside \"double quotes\".";
console.log(myStr);

// Quoting Strings with Single Quotes
const doubleQuoteStr = "This is a string";
const singleQuoteStr = 'This is also a string';
console.log(doubleQuoteStr, singleQuoteStr);

const conversation = 'Finn exclaims to Jake, "Algebraic!"';
console.log(conversation);

const goodStr = 'Jake asks Finn, "Hey, let\'s go on an adventure?"';
// const badStr = 'Finn responds, "Let's go!"';
console.log(goodStr);

const myString = '<a href="http://www.example.com" target="_blank">Link</a>';
console.log(myString);

// Escape sequences
const myEscape = "FirstLine\n\t\\SecondLine\nThirdLine";
console.log(myEscape);


// Concatenating Strings with Plus Operator
const ourStr = "I come first. " + "I come second.";
console.log(ourStr) 

const ourNewStr = "This is the start. " + "This is the end.";
console.log(ourNewStr)

// Concatenating strings with the Plus Equals Operator
let yourStr = "I come first. ";
yourStr += "I come second.";
console.log(yourStr)

yourStr = "This is the first sentence. "
console.log(yourStr)

yourStr += "This is the second sentence."
console.log(yourStr)


// Constructing Strings with Variables
const yourName = "freeCodeCamp";
const yourNewStr = "Hello, our name is " + yourName + ", how are you?";
console.log(yourNewStr)

// Appending Variables to Strings
const anAdjective = "awesome!";
let newStr = "freeCodeCamp is ";
newStr += anAdjective;
console.log(newStr)

// Find the length of a String
console.log("Alan Peter".length);
let herName = "Ada";
console.log(herName.length);

// Use Bracket Notation to Find the First Character in a String
let hisName = "Charles";
let firstletter = hisName[0];
console.log(firstletter);

/* String immutability - a string cannot be amended but a value 
can be reassigned */

// Use Bracket Notation to Find the Nth Character in a String
const secondLetterOfFirstName = herName[1]
console.log(secondLetterOfFirstName)

// Use Bracket Notation to Find the Last Character in a String
const lastLetter = herName[herName.length - 1]
console.log(lastLetter)

// Use Bracket Notation to Find the Nth-to-Last Character in a String
const thirdToLastLetter = hisName[hisName.length - 3]
console.log(thirdToLastLetter)

// Convert string to lower/uppercase
console.log(hisName);
console.log(hisName.toLowerCase());

console.log(hisName.toUpperCase());


// The replace() method returns a new string
const browserType = "mozilla";
const newBrowserType = browserType.replace("moz", "van");

console.log(browserType, newBrowserType); 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         

const test = browserType.includes("moz");
console.log("includes method result", test);
