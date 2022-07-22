const quotes = [
    {
        quote: "I see now that one’s birth is irrelevant. It’s what you do that determines who you are.”",
        author: "Mewtwo"
    },
    {
        quote: "There’s no sense in going out of your way to get somebody to like you.",
        author: "Ash Ketchum"
    },
    {
        quote: "Don’t you know that love is the most important thing in the whole world?",
        author: "Misty Williams"
    },
    {
        quote: "Make your wonderful dream a reality, it will become your truth. If anyone can, it’s you.",
        author: "N Pokemon Black/White"
    },
    {
        quote: "Humans may have created me, but they will never enslave me. This cannot be my destiny.",
        author: "Mewtwo"
    },
    {
        quote: "There are bad ways to win and good ways to lose. What’s interesting and troubling is that it’s not always clear which is which.",
        author: "Grimsley"
    },
    {
        quote: "You see, sometimes friends have to go away, but a part of them stays behind with you.",
        author: "Ash Ketchum"
    },
    {
        quote: "A Caterpie may change into a Butterfree, but the heart that beats inside remains the same.",
        author: "Brock Harrison"
    },
    {
        quote: "The strength to protect, huh? But what are you really protecting? A tomorrow that will only end up being worse than today?",
        author: "Lysandre"
    },
    {
        quote: "Men, when they fight in movies, it's a very different style. Harrison Ford was so cool when he had the whip, and Bruce Lee was such an artist that you couldn't take your eyes off of him.",
        author: "Lucy Liu"
    },
]

export default function quotesView(props) {
    let html = `
<div class="card" id="my-quotes">
    <div class="card-header">
    Inspirational Pokemon Quotes
    </div><div class="card-body">
`
    for (let i = 0; i < quotes.length; i++) {
        html+= `
    <blockquote class="blockquote mb-0">
        <p>${quotes[i].quote}</p>
        <footer class="blockquote-footer">${quotes[i].author}</footer>
    </blockquote>
`
    }
    return html;
}

export function quotesEvents() {

}