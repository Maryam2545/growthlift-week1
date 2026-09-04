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


// ================================
// DATA TYPES
// ================================

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


// ================================
// FUNCTIONS
// ================================

// Regular function
function greet(name) {
    return "Hello " + name;
}

console.log(greet("Maryam"));


// Arrow function
const greetArrow = (name) => "Hello " + name;

console.log(greetArrow("Maryam"));


// ================================
// LOOPS
// ================================

// For loop
for (let i = 0; i < 5; i++) {
    console.log("For loop:", i);
}


// forEach loop
skills.forEach(skill => {
    console.log("Skill:", skill);
});


// ================================
// CONDITIONALS
// ================================

let isOnlineStatus = true;

if (isOnlineStatus) {
    console.log("User is online");
} else {
    console.log("User is offline");
}


// ================================
// TEMPLATE LITERALS
// ================================

console.log(`Welcome to ${company}, ${name}!`);


// ==========================================
// DAY 4 - DOM MANIPULATION
// ==========================================

// Selecting elements

const heading = document.querySelector("h1");
const cards = document.querySelectorAll(".card");
const hero = document.getElementById("hero");

console.log("querySelector:", heading);
console.log("querySelectorAll:", cards);
console.log("getElementById:", hero);


// Changing content and style

hero.textContent = "Hello from JavaScript!";
hero.style.color = "#00C864";


// Adding, removing and toggling classes

cards[0].classList.add("highlighted");

cards[0].classList.remove("highlighted");

cards[0].classList.toggle("highlighted");


// ==========================================
// DAY 4 - TAB SWITCHER
// ==========================================

const tabs = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabs.forEach(tab => {

    tab.addEventListener("click", () => {

        // Remove active class from all tabs
        tabs.forEach(item => {
            item.classList.remove("active");
        });

        // Add active class to clicked tab
        tab.classList.add("active");


        // Hide all tab contents
        tabContents.forEach(content => {
            content.classList.remove("active");
        });


        // Show selected tab content
        const selectedTab = document.getElementById(tab.dataset.tab);

        selectedTab.classList.add("active");

    });

});

// ==========================================
// DAY 5 - FETCH API
// RANDOM QUOTE GENERATOR
// ==========================================

const quoteText = document.getElementById("quote-text");
const quoteAuthor = document.getElementById("quote-author");
const quoteButton = document.getElementById("new-quote");

function getQuote() {

    quoteText.textContent = "Loading...";
    quoteAuthor.textContent = "";

    fetch("https://dummyjson.com/quotes/random")

        .then(response => response.json())

        .then(data => {

            console.log("Quote Data:", data);

            quoteText.textContent = `"${data.quote}"`;

            quoteAuthor.textContent = `— ${data.author}`;

        })

        .catch(error => {

            console.error("Error:", error);

            quoteText.textContent = "Sorry, something went wrong.";

            quoteAuthor.textContent = "";

        });
}

quoteButton.addEventListener("click", getQuote);

getQuote();