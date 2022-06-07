"use strict";

// Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)

// For example, showMultiplicationTable(7) should output

function showMultiplicationTable(number){
    for (let i = 1; i <= 10 ; i++) {
       console.log(number + " * " + i + " = " + i * number)
    }
}
// showMultiplicationTable(7)

// Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even. For example:

for (let i = 1; i <= 10; i++) {
    var random = Math.floor((Math.random() * 180) + 20);
    if (random % 2 == 0){
        console.log(random + " this number is even")
    } else{
        console.log(random + " this number is odd")
    }
}

// Create a for loop that uses console.log to create the output shown below.
// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999

for (let i = 1; i < 10 ; i++) {
    let string = ''
    for (let j = 1; j <= i ; j++) {
        string += i
    }
    console.log(string)
}

for (let i = 100; i > 0 ; i = i - 5) {
    console.log(i)
}