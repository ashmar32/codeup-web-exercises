import homeHTMLFunction , {homeJSFunction} from "./views/Home.js";
import aboutHTMLFunction, {aboutJSFunction} from "./views/About.js";
import Error404 from "./views/Error404.js";
import Loading from "./views/Loading.js";
import Login from "./views/Login.js";
import LoginEvent from "./auth.js";
import Register from "./views/Register.js"
import {RegisterEvent} from "./views/Register.js";
import UserIndex, {UserEvents} from "./views/User.js";
import Logout, {LogoutEvents} from "./views/Logout.js";
import dogFactsView, {DogFactsEvents} from "./views/DogFacts.js";
import quotesHTMLFunction, {quotesJSFunction} from "./views/Quotes.js";
import InsertDogView, {InsertDogFactEvents} from "./views/AddDogFact.js";
import InsertNewQuoteView, {InsertNewQuoteEvents} from "./AddQuote.js";
/**
 * Returns the route object for a specific route based on the given URI
 * @param URI
 * @returns {*}
 */
export default function router(URI) {
    const routes = {
        '/': {
            returnView: homeHTMLFunction,
            state: {},
            uri: '/',
            title: 'Home',
            viewEvent: homeJSFunction
        },
        '/logout': {
            returnView: Logout,
            state: {},
            uri: '/',
            title: 'Logout',
            viewEvent: LogoutEvents
        },
        '/login': {
            returnView: Login,
            state: {},
            uri: '/login',
            title: "Login",
            viewEvent: LoginEvent
        },
        '/register': {
            returnView: Register,
            state: {},
            uri: '/register',
            title: 'Register',
            viewEvent: RegisterEvent
        },
        '/users': {
            returnView: UserIndex,
            state: {},
            uri: "/users",
            title: 'User Info',
            viewEvent: UserEvents
        },
        '/about': {
            returnView: aboutHTMLFunction,
            state: {},
            uri: '/about',
            title: 'About',
            viewEvent: aboutJSFunction
        },
        '/error': {
            returnView: Error404,
            state: {},
            uri: location.pathname,
            title: ' ERROR',
        },
        '/loading': {
            returnView: Loading,
            state: {},
            uri: location.pathname,
            title: 'Loading...',
        },
        '/dogs': {
            returnView: dogFactsView,
            state: {
                dogFacts: {
                    url: "https://dogfacts.fulgentcorp.com:12250/v1/facts?random=true&limit=10",
                    headers: {
                        'Accept': 'application/json',
                        'Authorization': DOG_QUOTE_API_KEY
                    }
                }
            },
            uri: '/dogs',
            title: 'Dog Facts',
            viewEvent: DogFactsEvents
        },
        '/quotes': {
            returnView: quotesHTMLFunction,
            state: {
                quotes: {
                    url: "https://quotes.fulgentcorp.com:12250/v1/quotes?random=true&limit=10",
                    headers: {
                        'Accept': 'application/json',
                        'Authorization': DOG_QUOTE_API_KEY
                    }
                }
            },
            uri: '/quotes',
            title: 'Quotes',
            viewEvent: quotesJSFunction
        },
        '/insert-dog-fact': {
            returnView: InsertDogView,
            state: {},
            uri: '/insert-dog-fact',
            title: 'Insert Dog Fact',
            viewEvent: InsertDogFactEvents
        },
        '/insert-quote': {
            returnView: InsertNewQuoteView,
            state: {},
            uri: '/insert-quote',
            title: 'Insert New Quote',
            viewEvent: InsertNewQuoteEvents
        }
    };

    // if we see a URI with index.html then interpret that as a route for /
    if(URI.indexOf("index.html") > -1) {
        URI = "/";
    }

    return routes[URI];
}