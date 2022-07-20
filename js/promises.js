"use strict";
document.addEventListener("DOMContentLoaded", function () {
    (async function () {
        const options = {
            method: 'GET',
            headers: {
                "Authorization": `token ${GIT_HUB_API_KEY}`
            }
        }
        function getLastCommit(username) {
            return fetch(`https://api.github.com/users/${username}/events/public`, options)
                .then(response => response.json())
                .catch(function(error) {
                    console.warn("ERROR: " + error);
                })
        }
        const users = await getLastCommit('ashmar32')
        console.log(users[0].created_at)
    })()

})

