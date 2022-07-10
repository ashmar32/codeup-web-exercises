"use strict";
(function() {
    document.addEventListener("DOMContentLoaded", function () {
        const addBtn = document.querySelector("#add-todo");
        addBtn.addEventListener("click", addTodo);
        const getInput = document.querySelector("#add-todo-text");
        const todoContainer = document.querySelector("#my-todos");
        // add your code here

        function addTodo() {
    //         todoContainer.innerHTML += `<div class="card col-2">
    //   <div class="card-body">
    //     ${getInput.value}
    //   </div>
    //   <div class="card-footer">
    //     <button class="delete-todo">Delete Todo</button>
    //   </div>
    // </div>`
    //         Create an "li" node:
            const node = document.createElement("div");

// Create a text node:
            const textnode = document.createTextNode(getInput.value);

// Append the text node to the "li" node:
            node.appendChild(textnode);

// Append the "li" node to the list:
            todoContainer.appendChild(node);


            //  get input

            // add a new Todo card as a child of the div with id my-todos.
        }

        function deleteTodo(event) {
            //  get last item from list

            //  remove item from list

        }

    });
})();