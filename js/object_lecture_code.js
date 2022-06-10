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

//How to grab just 1 part of the group to use: IE send address, but not all other info about my house.

console.log("Come on down to a block party at " + myHouse.address);
console.log("Come on down to a block party at " + myHouse.address + ". You'll know it's my house because it is a " + myHouse.color);

//Nesting other objects inside our objects

myHouse.address = {
    streetNum: 1428,
    streetName: "Elm St.",
    city: "Scary",
    state: "Texas"

}
console.log(myHouse.color);

//nested
let otherCar = {
    year: 2020,
    make: "Toyota",
    model: "Corolla",
    owner: {
        name: "Crystal",
        age: 39
    }
}
console.log("My other car is " + otherCar.owner.name + " 's car. She is " + otherCar.owner.age + " years old.")

otherCar.horn = function (){
    alert("HONK HONK")
}
console.log(otherCar.horn())

let cars = [car, otherCar];
let students = [{name: "chica"}, {name: "diana"}]

console.log(cars);
console.log(students);