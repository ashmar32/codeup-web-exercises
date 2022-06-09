(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */

    let names = ['Ashley', 'Crystal', 'Chica', 'Diana'];
    console.log(names)
    // Variable called names is declared and initialized: "let names =" The items in the array "[]" are "elements" and separated by commas. In this case the names of the 4 people are the elements in the array.

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
    // .length will log the number of elements in the name array

    console.log(names.length + ' elements in the array')

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */

    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
    console.log(names[3]);

    // access the element's index by calling on their number in console.log; remember that element index will start at 0 and continue up for the rest of the elements; if there is no more and an index is called it will return undefined.
    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */

    for (let i = 0; i < names.length; i++) {
        console.log(names[i])
    }

    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */

    names.forEach(function (name) {
        console.log(name);
    })
    //.forEach can take up to 3 parameters and doesn't have a return value. it provides access to the array element, the corresponding index, and the array itself. .forEach will be called back every item in the array.
    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

    function first(arr){
        return arr[0]
    };
    function second(arr){
        return arr[1]
    };
    function last(arr){
        return arr[arr.length - 1];
    };

    console.log("The first element was " + first(names));
})();