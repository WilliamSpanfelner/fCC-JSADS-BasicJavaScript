const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];

  // console.log(contacts);

  
  function lookUpProfile(name, prop) {
    // Only change code below this line
  // console.log("received:", name, prop);
      for (let index = 0; index < contacts.length; index++) {
        // console.log(index, contacts[index].firstName);
        if (name == contacts[index].firstName) {
          // console.log(name + " got a hit");
          if (contacts[index].hasOwnProperty(prop)) {
            return contacts[index][prop];
          }
          return "No such property";
        }
      }
      return "No such contact";
    // Only change code above this line
  }



// console.log(lookUpProfile("Akira", "likes"));
// console.log(lookUpProfile("Will", "likes"));
// console.log(lookUpProfile("Akira", "dislikes"));
// console.log(lookUpProfile("Kristian", "lastName"));
// console.log(lookUpProfile("Sherlock", "likes"));
// console.log(lookUpProfile("Harry", "likes"));
// console.log(lookUpProfile("Akira", "address"));


let testData = [
    {
        name: "Akira", 
        prop: "likes"
    },
    {
        name: "Will", 
        prop: "likes"
    },
    {
        name: "Akira", 
        prop: "dislikes"
    },
    {
        name: "Kristian", 
        prop: "lastName"
    },
    {
        name: "Sherlock", 
        prop: "likes"
    },
    {
        name: "Harry", 
        prop: "likes"
    },
    {
        name: "Akira", 
        prop: "address"
    },
];
for (let i = 0; i < testData.length; i++) {
    console.log(lookUpProfile(testData[i].name, testData[i].prop));
}