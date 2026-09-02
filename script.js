// ================================
// DAY 3 - JAVASCRIPT FUNDAMENTALS
// ================================

// VARIABLES
let name = "Maryam";
const company = "GrowthLift";
var oldStyle = "Avoid this";

console.log("Name:", name);
console.log("Company:", company);
console.log("Old Style:", oldStyle);


// DATA TYPES

// String
let greeting = "Hello World";
console.log(greeting);

// Number
let price = 15000;
console.log(price);

// Boolean
let isOnline = true;
console.log(isOnline);

// Array
let skills = ["HTML", "CSS", "JavaScript"];
console.log(skills);

// Object
let intern = {
    name: "Afi",
    week: 2,
    city: "Lahore"
};

console.log(intern);


// FUNCTIONS

// Regular function
function greet(name) {
    return "Hello " + name;
}

console.log(greet("Maryam"));


// Arrow function
const greetArrow = (name) => "Hello " + name;

console.log(greetArrow("Maryam"));


// LOOPS

// For loop
for (let i = 0; i < 5; i++) {
    console.log("For loop:", i);
}


// forEach loop
skills.forEach(skill => {
    console.log("Skill:", skill);
});


// CONDITIONALS

let isOnlineStatus = true;

if (isOnlineStatus) {
    console.log("User is online");
} else {
    console.log("User is offline");
}


// TEMPLATE LITERALS

console.log(`Welcome to ${company}, ${name}!`);