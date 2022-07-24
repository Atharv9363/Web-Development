//AND Operator

// const password = prompt("Enter your password");
// if (password.length >= 6 && password.indexOf(' ') === -1) {
//     console.log("Valid Password!");
// }
// else {
//     console.log("Incorrect Password!");
// }


//OR Operator

// const age = -10;
// if (age >= 0 && age < 5 || age >= 65) {
//     console.log("Free");
// }
// else if (age >= 5 && age < 10) {
//     console.log("$10");
// }
// else if (age >= 10 && age < 65) {
//     console.log("$20");
// }
// else {
//     console.log("Invalid age!")
// }


//Not Operator

let firstName = prompt("Enter your first name");
if (!firstName) {
    firstName = prompt("Try again!!");
}