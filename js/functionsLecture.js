(function()
{
function helloWorld() {
    //this is the body of the function - we write our instructions
    alert("Hello World!");
}
//to use a function: We 'call it
helloWorld()

//A more advanced function with some parameters to allows for arguments [meaning - a place for inuote to come into the function of some kind]

function sumNums(x, y){//Now - inside our parenthesis we have TWO PARAMETERS allowing our function to take in TWO PIECES of information
    return x + y

}//calling a function with arguments - look at how we don't have to re-write [repeat] ourselves
//anonymous functions - they are still set up rather similarly but lack the name/identifier piece

//the below is called a function expression vs a function declaration [ * VOCAB PIECE * }
let honkHorn = function(){
    alert("Beep beep!");
}

//Hoisting - who dat?
// hoistFunction(); Weird - I can call this declared function BEFORE [above] it seems ti to be defined. <-- we're hoisting

function hoistFunction(){
    alert("Help! I've been hoisted! Where am I? I think I ended up at the top of the code :0")
}
//an expression does not like to hoist :(
let duckCall = function (){
    alert("Insert duck sound here - QUACK")
}
duckCall()

//global scope

let globalVar = "hi, I'm globally scoped ^_^";
//function(){
    //alert(globalVar)

//function scopedComparison(){
    let localVar = "Look I'm a local guy!"
    alert(localVar);
    alert(globalVar);

}

//scopedComparison();

alert(localVar)

//a lil more scoped
let x = 300;
let y = 100;

function scopeExample(){
    let x = 1;
    let x = 2;

    console.log("x: " + x + " | y:" + y);

    return x + y;

}
})();

