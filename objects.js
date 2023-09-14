// Build JavaScript Objects
// aka Dictionaries in other languages
const cat = {
    "name": "Whiskers",
    "legs": 4,
    "tails": 1,
    "enemies": ["Water", "Dogs"]
};

/* 
The quotes around the properties ('keys' in other languages) can be omitted.  
Additionally, numbers can be used instead (see below).
*/

const anotherObject = {
    make: "Ford",
    5: "five",
    "model": "focus"
};

const myDog = {
    "name": "Mayo",
    "legs": 4,
    "tails": 1, 
    "friends": ["Mikkel", "Anja", "Iouna", "william", "Xenia", "Signe"]
};

// Accessing Object Properties with Dot Notation
const myObj = {
    prop1: "val1",
    prop2: "val2"
};

const prop1val = myObj.prop1;
const prop2val = myObj.prop2;

console.log(prop1val);
console.log(prop2val);

const testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};

const hatValue = testObj.hat;
const shirtValue = testObj.shirt;

console.log(hatValue);
console.log(shirtValue);


// Accessing Object Properties with Bracket Notation
// Used if the property(key) has a space in its name.
const yourObj = {
    "Space Name": "Kirk",
    "More Space": "Spock",
    "NoSpace": "USS Enterprise"
};

console.log(yourObj["Space Name"]);
console.log(yourObj["More Space"]);
console.log(yourObj["NoSpace"]);


// Accessing Object Properties with Variables
const dogs = {
    Fido: "Mutt",
    Hunter: "Doberman",
    Snoopie: "Beagle"
};

const hisDog = "Hunter";
const hisBreed = dogs[hisDog];
console.log(hisBreed);

// Updating Object Properties
const ourDog = {
    "name": "Camper",
    "legs": 4, 
    "tails": 1, 
    "friends": ["everything!"]
};

ourDog.name = "Happy Camper";
ourDog['name'] = "Happy Camper";
// The above two lines have the same effect.
console.log(ourDog.name);

// Add New Properties to a JavaScript Object
ourDog.bark = "bow-wow";
// or
ourDog['bark'] = 'yip-yip'; 

console.log(ourDog.bark);

// Delete Properties from a JavaScript Object
delete ourDog.bark;
console.log(ourDog);


// Using Objects for Lookups
const article = {
    title: "How to create objects in JavaScript",
    link: "https://www.freecodecamp.org/news/a-complete-guide-to-creating-objects-in-javascript-b0e2450655e8/",
    author: "Kaashan Hussain",
    language: "JavaScript",
    tags: "TECHNOLOGY",
    createdAt: "NOVEMBER 28, 2018"
};

const articleAuthor = article["author"];
const articleLink = article["link"];

const value = "title";
const valueLookup = article[value];

// JavaScript Objects can be used to replace switch statements.

// Setup
function phoneticLookup(val) {
    let result = "";
  
    // Only change code below this line
    // switch(val) {
    //   case "alpha":
    //     result = "Adams";
    //     break;
    //   case "bravo":
    //     result = "Boston";
    //     break;
    //   case "charlie":
    //     result = "Chicago";
    //     break;
    //   case "delta":
    //     result = "Denver";
    //     break;
    //   case "echo":
    //     result = "Easy";
    //     break;
    //   case "foxtrot":
    //     result = "Frank";
    // }
    
    const lookup = {
        alpha: "Adams",
        bravo: "Boston",
        charlie: "Chicago",
        delta: "Denver",
        echo: "Easy",
        foxtrot: "Frank"
    };

    result = lookup[val];
    console.log(result);

    // Only change code above this line
    return result;
  }
  
  console.log(phoneticLookup("charlie"));


// Testing Objects for Properties
function checkForProperty(object, property) {
    return object.hasOwnProperty(property);
}

console.log(checkForProperty({top: "hat", bottom: "pants"}, "top"));  // true
console.log(checkForProperty({top: "hat", bottom: "pants"}, "middle"));  // false

/**
 * 
 * @param {*} obj 
 * @param {*} checkProp 
 * @returns a value for the checkProp property if exists and "Not Found" otherwise
 */
function checkObj(obj, checkProp) {
    if (obj.hasOwnProperty(checkProp)) {
        return obj[checkProp]
    }
    return "Not Found"
}

console.log(checkObj({top: "hat", bottom: "pants"}, "top"));  // hat
console.log(checkObj({top: "hat", bottom: "pants"}, "middle"));  // Not Found


// Manipulating Complex Objects
const ourMusic = [
    {
        artist: "Daft Punk",
        title: "Homework",
        release_year: 1997,
        formats: [
            "CD",
            "Cassette",
            "LP"
        ],
        gold: true
    }
];

const myMusic = [
    {
        artist: "Billy Joel",
        title: "Piano Man",
        release_year: 1973,
        formats: [
            "CD",
            "8T",
            "LP"
        ],
        gold: true
    }
];

// console.log(myMusic);

myMusic.push({
    artist: "ABBA",
    title: "Gold: Greatest Hits",
    release_year: 1992,
    formats: [
        "CD",
        "LP",
        "MP3"
    ]
});

console.log(myMusic);


// Accessing Nested Objects
const ourStorage = {
    desk: {
        drawer: "stapler"
    },
    cabinet: {
        "top drawer": {
            folder1: "a file",
            folder2: "secrets"
        },
        "bottom drawer": "soda"
    }
};

console.log(ourStorage.cabinet["top drawer"].folder2);
console.log(ourStorage.desk.drawer);

const myStorage = {
    car: {
        inside: {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        outside: {
            trunk: "jack"
        }
    }
};

const gloveBoxContents = myStorage.car.inside["glove box"];
console.log(gloveBoxContents);

// Accessing Nested Arrays
const ourPets = [
    {
        animalType: "cat",
        names: [
            "Meowzer",
            "Fluffy",
            "Kit-Cat"
        ]
    },
    {
        animalType: "dog",
        names: [
            "Spot",
            "Bowser",
            "Frankie"
        ]
    }
]

console.log(ourPets[0].names[1]);
console.log(ourPets[1].names[0]);

const myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];

const secondTree = myPlants[1].list[1];
console.log(secondTree);


// Record Collection
const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };

  function updateRecords(records, id, prop, value) {
    if (value == "") {
        delete records[id][prop];
    } else if (prop != "tracks" && value != "") {
        records[id][prop] = value;
    } else if (prop == "tracks" && value != "") {
        if (!records[id].hasOwnProperty(prop)) {
            records[id][prop] = [];
        };
        records[id][prop].push(value);
    }
    // console.log(records[id].hasOwnProperty(prop));
    return records
  }

//   newRecords = updateRecords(recordCollection, 5439, "artist", "ABBA");
//   newRecords = updateRecords(recordCollection, 1245, "artist", "");
//   newRecords = updateRecords(recordCollection, 1245, "artist", "Huey Luis");
  newRecords = updateRecords(recordCollection, 5439, "tracks", "Dancing Queen");
//   newRecords = updateRecords(recordCollection, 1245, "tracks", "Addicted to Love");

  console.log(newRecords);
