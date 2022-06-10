let blankObj = {};

console.log(blankObj);


let car = { year: 2021, make: "Toyota", model: "Rav 4" }

console.log(car)

let oneOfMyCats = {name: "Weeny", color: "Black", age: "8 months"}

console.log(oneOfMyCats);
//These are object literal Notation - {}

let customObject = new Object();

console.log("this is a object constructor" + customObject);

//Is the only way to build a functioning object on declaration?

let myHouse = {};

console.log(myHouse);

//Whoops- meant to actually share some cool deets about my house, let's set up some properties

myHouse.color = "Very off gray/blue thing";
myHouse.squareFeet = 1297;
myHouse.bedrooms = 3;
myHouse.bathrooms = 2;

//Let tell you about my house again
console.log(myHouse);

//Oh my address, here it is with array notation

myHouse["address"] = "1428 Elm Street";

console.log(myHouse);
