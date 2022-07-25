import createView from "./createView.js";
// import {showNotification} from "../messaging.js";

export default function InsertNewQuoteView(props) {
    return `
        <form class="container">
            <form>
                <label for="quoteInput" class="form-label">New Quote: </label>
                <input class="form-control" list="datalistOptions" id="quoteInput" placeholder="Enter a new quote">
                
                <label for="authorInput" class="form-label">New Author: </label>
                <input class="form-control" list="datalistOptions" id="authorInput" placeholder="Enter a new author">
                
                <button class="form-control" id="insert-btn">Insert New Quote</button>
            </form>
        </div>
`;
}

export function InsertNewQuoteEvents() {
    const addButton = document.querySelector("#insert-btn");
    addButton.addEventListener("click", addNewQuote);
}

function addNewQuote() {
    // make sure user entered something non-blank for input
    const quoteInput = document.querySelector("#quoteInput");
    const quoteText = quoteInput.value.trim();

    const authorInput = document.querySelector("#authorInput");
    let authorText = authorInput.value.trim();

    if (quoteText.length < 1) {
        console.log("Fact cannot be blank!");
        return;
    }
    if (authorText.length < 1) {
        authorText = "Anonymous";
    }
    const newQuote = {
        quote: quoteText,
        author: authorText
    }
    const requestOptions = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': DOG_QUOTE_API_KEY
        },
        body: JSON.stringify([newQuote])
    }
    fetch("https://dogfacts.fulgentcorp.com:12250/v1/quotes", requestOptions)
        .then(function (response) {
            if (!response.ok) {
                console.log("insert quote error: " + response.status);
            } else {
                console.log("insert quote ok");
                createView("/quotes");
            }
        });
}