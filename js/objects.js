(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

        let person = new Object;
            person.firstName = "Ashley";
            person.lastName = "Martinez";
            /*
           var person = [{
            firstName: "Ashley",
            lastName: "Martinez",
            age: 27
            },
            {
            firstName: "Meghan",
            lastName: "Ahrens",
            age: 27
            }];
             */


    console.log(person.firstName);
    console.log(person.lastName);


    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

        person.sayHello = function (){
            return "Hello from " + person.firstName + " " + person.lastName + "!"
        }
    console.log(person.sayHello())

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    function getDiscount (input){
        //create object to store discount info
        let discount = {};
        //save results of discount info to object for use later
        discount.promotion = (input) - (input * .12);
        discount.amountSaved = (input) - discount.promotion;
        return discount;

    }
    shoppers.forEach(function (shopper){
        //check if the total matches the criteria for output
        if (shopper.amount > 200){
           let discountedAmount = getDiscount(shopper.amount)
            console.log(shopper.name + " , You spent: $" + shopper.amount + ". " + "Your discount is: $" + discountedAmount.amountSaved.toFixed(2) + " Your total after discount is: $" + (shopper.amount - discountedAmount.amountSaved))
        }
        else {
            console.log(shopper.name + ", You spent: $" + shopper.amount + ". You didn't spend enough to qualify for the discount.")
        }

    })
    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

        let book1 = createBook('The Salmon of Doubt', 'Douglas Adams')
            book1.title = "The Salmon of Doubt";
            book1.author = {}
            book1.author.firstName = "Douglas"
            book1.author.lastName = "Adams"
            book1.author.age = 65
        let book2 = {}
            book2.title = "Walkaway"
            book2.author = {}
            book2.author.firstName = "Cory"
            book2.author.lastName = "Doctorow"
            book2.author.age = 35
        let book3 = {}
            book3.title = "A Brief History of Time"
            book3.author = {}
            book3.author.firstName = "Stephen"
            book3.author.lastName = "Hawking"
            book3.author.age = 45
        let books = [book1, book2, book3]

            // console.log(books)
            // console.log(book1.title)
            // console.log(book3.author.firstName)
            // console.log(book2.author.lastName)

         for (let i = 0; i < books.length; i++) {
             let currentBook = books[i];
             let currentBookNumber = i + 1
             // console.log("Title: " + currentBook.title);
             // console.log("Author: " + currentBook.author.firstName + " " + currentBook.author.lastName)
             console.log("Book Number # " + currentBookNumber )
             showBookInfo(currentBook)
    }
    // forOf Loop: another loop to use
    // for (const book of books) {
    //     console.log("Title: " + book.title)
    //     console.log("Author: " + book.author.firstName + " " + book.author.lastName)
    // }




    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */
    function showBookInfo(bookObject) {
        console.log("Title: " + bookObject.title)
        console.log("Author: " + bookObject.author.firstName + " " + bookObject.author.lastName + "\n------------------------------------------")
    }

    function createBook(title, author){
        let nameArray = author.split(" ")
        let authorFirstname = nameArray[0]
        let authorLastname = nameArray[1]

        let newBook = {}
        newBook.title = title
        newBook.author = {}
        newBook.author.firstName = authorFirstname
        newBook.author.lastName = authorLastname

        return newBook;
    }

    console.log(createBook('harry Poter', 'JK Rowling'));



// use MAP to produce an array of just book titles; using the function from above

let bookTitles = books.map(function (book) {
    return book.title;
})
console.log(bookTitles)

//use FILTER to produce a subset of books for authors age 30+
const boomerBooks = books.filter(function (book) {
//    return true if we want book in the output array
    if (book.author.age >= 30) {
        return true;
    }
})

//use REDUCE to sum the author ages
const sumAge = books.reduce(function (totalAgeSoFar, book) {
    return totalAgeSoFar + book.author.age;
}, 0);
console.log(sumAge);
console.log(sumAge / books.length);

    const minAge = books.reduce(function (minAgeSoFar, book){

    }, Infinity);
    console.log(minAge); // should return 35


})();