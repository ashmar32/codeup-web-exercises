"use strict";

// Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.
// Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.

while(true){
    let userOdd = parseInt(prompt("Please enter an odd number between 1-50."));
    if(userOdd % 2 === 0){
        alert("number is not Odd");
    } else if(userOdd < 1){
        alert("number is less than one");
    } else if(userOdd > 50){
        alert("number is greater than 50");
    } else if(isNaN(userOdd)) {
        alert("input is not a number");
    } else{
        break;
    }
}
let num = parseInt(prompt("Please enter an odd number between 1-50."));
for (let i = 1; i < 50 ; i++) {
    if (i === num) {
        console.log("Yikes! Skipping this number " + num)
        continue;
    }
        if (i % 2 !== 0) {
            console.log("Here is an odd number " + i)
        }
}