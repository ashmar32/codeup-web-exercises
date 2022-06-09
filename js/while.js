"use strict";

let i = 1;
while (i < 65536) {
    i = i * 2
    console.log(i);
}

let allCones = Math.floor(Math.random() * (100 - 50)) + 50;

do {
   let conesSold = Math.floor(Math.random() * 5) + 1; //this is how much the customer buys 1-5

    if (allCones >= conesSold) {
        allCones = allCones - conesSold; // This sets up the formula for the total (allCones) amount of cones - the amt sold (conesSold).
        console.log(conesSold + " cones sold! I now have " + allCones);
    } else {
        console.log("Sorry, I only have " + allCones + " left. I can't sell you " + conesSold + ".")
    }
}   while (allCones !== 0)

console.log("We've sold out all our cones! Come again!")