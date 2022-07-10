"use strict";
(function() {
    document.addEventListener("DOMContentLoaded", function () {
        const addBtn = document.querySelector("#add-todo");
        addBtn.addEventListener("click", addTodo);
        const getInput = document.querySelector("#add-todo-text");
        const todoContainer = document.querySelector("#my-todos");
        const deleteBtn = document.querySelector(".delete-todo");
        deleteBtn.addEventListener("click", deleteTodo);
        console.log("hi")
        // add your code here

        function addTodo() {
            let card = document.createElement("div")
                    card.classList.add("card", "col-2")
            card.innerHTML += `<div class="card-body">
<!--get input-->
        ${getInput.value}
      </div>
      <div class="card-footer">
        <button class="delete-todo">Delete Todo</button>
      </div>`
            // add a new Todo card as a child of the div with id my-todos.
            todoContainer.appendChild(card);
        }
        function deleteTodo(event) {
            //  get last item from list
            //  remove item from list
            let removeItem = document.querySelector("#my-todos");
                this.parentElement.removeChild(removeItem)
        }

    });
})();