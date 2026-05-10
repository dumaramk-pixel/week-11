// Part 1: Time-Based Greeting

// Ask user for name
let userName = prompt("Enter your name:");

// Get current hour
let hour = new Date().getHours();

// Greeting using if-else
if (hour < 12) {
    console.log("Good Morning, " + userName + "!");
}
else if (hour < 18) {
    console.log("Good Afternoon, " + userName + "!");
}
else {
    console.log("Good Evening, " + userName + "!");
}


// Part 2: Age and Days Lived Verification

// Ask birth year
let birthYear = prompt("Enter your birth year:");

// Convert to number
birthYear = Number(birthYear);

// Calculate age
let age = 2026 - birthYear;

// Calculate approximate days lived
let daysLived = age * 365;

// Print result
console.log("You have lived for approximately " + daysLived + " days!");

// Adult or minor verification
if (age >= 18) {
    console.log("You are an adult.");
}
else {
    console.log("You are a minor.");
}


// Part 3: Dark Mode Toggle

const darkButton = document.querySelector("#darkModeBtn");

darkButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});