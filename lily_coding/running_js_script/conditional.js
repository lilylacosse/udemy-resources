// let random = Math.random();
// if (random < 0.5) {
//     console.log("Your number is less than 0.5")
//     console.log(random);
// }
// else {
//     console.log("Your number is greater than or equal to 0.5");
//     console.log(random);
// }

// const dayOfWeek = prompt("Enter a Day").toLowerCase();

// if (dayOfWeek === "monday") {
//     console.log("UGH I HATE MONDAYS");
// } else if (dayOfWeek === "saturday") {
//     console.log("YAY I LOVE SATURDAYS!");
// } else if (dayOfWeek === "friday") {
//     console.log("Happy Friday");
// } else if (dayOfWeek === "sunday") {
//     console.log("Be at peace");
// } else {
//     console.log("MEH");
// }

// const age = 89;

// if (age < 5.1) {
//     console.log("You are a Fetus. You get in for free!");
// } else if (age < 10.1) {
//     console.log("You are a Child. You get in for $10");
// } else if (age < 65) {
//     console.log("You are an Adult. You get in for $20");
// } else {
//     console.log("You are a Senior. You get in for $10");
// }

// const phrase = "slow"

// if (phrase === "stop") {
//     console.log("red");
// } else if (phrase === "slow") {
//     console.log("yellow");
// } else if (phrase === "go") {
//     console.log("green");
// } else {
//     console.log("purple");
// }

const password = prompt("Please enter a new password");

if (password.length >= 6) {
    if (password.indexOf(" ") === -1) {
        console.log("Valid Password");
    } else {
        console.log("Please Remove the Space in your password");
    }
} else {
    console.log("Password too short - Must be 6 + Characters");
}
