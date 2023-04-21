"use strict";
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log(`I can drive :D`);

// const private = "Audio";
// const provate = 534;





function logger() {
  console.log("My name is Russell");
}

// calling / running / invoking
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number("23");




// Function declaration
function calcAge1(birthYear) {
  return 2037 - Number(birthYear);
}

const age1 = calcAge1(1994);
console.log(age1);

// Function expression
const calcAge2 = function (birthYear) {
  return 2037 - Number(birthYear);
};

const age2 = calcAge2(1994);
console.log(age1, age2);



// Arrow function
const calcAge3 = (birthYear) => 2037 - birthYear;
// const firstName = "Russell";
const age3 = calcAge3(1994);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1994, "Russell"));
console.log(yearsUntilRetirement(1980, "Bob"));


function cutFruitPieces(fruit) {
  return fruit * 3;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
}

console.log(fruitProcessor(2, 3));



const calcAge = function (birthYear) {
  return 2037 - Number(birthYear);
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    return retirement;
  } else {
    return -1;
  }

  // return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1950, "Mike"));


const friends = [`Michael`, `Steven`, `Peter`];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);
console.log(y);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);

const firstName = "Jonas";
const jonas = [firstName, "Schmedtmann", 2037 - 1991, "teacher", friends];
console.log(jonas);
console.log(jonas.length);

// Exercise
const calcAge = function (birthYear) {
  return 2037 - Number(birthYear);
};
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);

// Add elements to end
const friends = [`Michael`, `Steven`, `Peter`];
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

// Add elements to beginning
friends.unshift("John");
console.log(friends);

// Remove elements
friends.pop(); // Last element
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // First element
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));

console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));

if (friends.includes("Steven")) {
  console.log(`You have a friend named Steven`);
}

// Key value pairs (dictionaries)

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};
console.log(jonas);

console.log(jonas.lastName);
console.log(jonas["lastName"]);

const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

const interestedIn = prompt(
  "What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends"
  );
  console.log(jonas[interestedIn]);
  
  if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
  } else {
    console.log(
      `Wrong request! Choose between firstName, lastName, age, job and friends`
      );
    }
    
jonas.location = "Portugal";
jonas["twitter"] = "@jonasschmedtman";
console.log(jonas);

// Challenge
console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`
  );
  
  const jonas = {
    firstName: "Jonas",
    lastName: "Schmedtmann",
    birthYear: 1991,
    job: "teacher",
    friends: ["Michael", "Peter", "Steven"],
    hasDriversLicense: false,
    
    calcAge: function () {
      this.age = 2037 - this.birthYear;
      return this.age;
    },
    
    getSummary: function () {
      this.summary = `${this.firstName} is a ${this.calcAge()}-year old ${
        this.job
      }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license`;
      return this.summary;
    },
  };
  
  console.log(jonas.calcAge());
  console.log(jonas.age);
  console.log(jonas.age);
  console.log(jonas.age);
  
  console.log(jonas.getSummary());
  console.log(jonas.summary);
  
  // Challenge
  // "Jonas is a 46-year old teacher, and he has a/no driver's license"
*/

// console.log(`Ligting weights repetition 1 🏋️`);

for (let rep = 1; rep <= 10; rep++) {
  console.log(`Ligting weights repetition ${rep} 🏋️`);
}
