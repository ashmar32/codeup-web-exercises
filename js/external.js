console.log("Hello from JavaScript!")
alert("Welcome to my Website")
var question = prompt("What is your favorite color?")
alert(question + " is my favorite color too")


var mermaid = prompt("How many days was the Little Mermaid rented?")
let p = 3;
alert("$" + mermaid * p + " is the total")
var bear = prompt("How many days was the Brother Bear rented?")
alert("$" + bear * p + " is the total")
var herc = prompt("How many days was Hercules rented?")
alert("$" + herc * p + " is the total")


let googlePay = 400
let amazonPay = 380
let facebookPay = 350

let totalGoogle = prompt("Hey, How many hours did you work for Google?")
let totalAmazon = prompt("Hey, How many hours did you work for Amazon?")
let totalfaceBook = prompt("Hey, How many hours did you work for Facebook?")

let moreThanTwo = confirm("Do you have more than two items in your cart?")
let offerStillValid = confirm("Is offer on the product still valid?")
let premiumMember = confirm("Are you a premium member?")


let sumGoogle = googlePay * totalGoogle
alert("It meets this criteria" + (moreThanTwo && offerStillValid || premiumMember) + " that you get a hat and discount")
alert("You will earn $" +sumGoogle + " from working at Google. You'll earn $" + (totalAmazon * amazonPay) + "from amazon. Finally, you'll earn $" + (totalfaceBook * facebookPay) + "from facebook.")
let timeInSchedule = confirm("Hey do you have time in your schedule for this class?")
let roomInClass = confirm("Did the class have room for an additional student?")
alert("It is " + (roomInClass && timeInSchedule) + " that you can attend this class with what you told me")


