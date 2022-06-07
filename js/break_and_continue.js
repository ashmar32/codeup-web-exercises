"use strict";


// Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.
// Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.



// do {
//     var userInput = prompt("Please enter an odd number between 1-50.");
//     var userOdd = Number.parseInt(userInput);
// } while(userOdd == NaN || userOdd % 2 === 0 || userOdd <= 1 || userOdd >= 50);


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
// let userInput = prompt("Please enter an odd number between 1-50.")
// console.log(typeof userInput);
// let userOdd = Number.parseInt(userInput);
// console.log(typeof userOdd);

// while(userOdd % 2 === 0 && userOdd <= 1 && userOdd <= 50 ){
//         userOdd = prompt("Not an odd number, please enter an odd number")
    // || typeof Number.parseInt(userOdd) !== 'number'
    // } else {
    //     alert("Thank you for your odd number - we are moving on")
    //     break;
    // }
 // }

