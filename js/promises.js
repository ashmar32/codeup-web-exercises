"use strict";
document.addEventListener("DOMContentLoaded", function () {
    (async function () {
        const options = {
            method: 'GET',
            headers: {
                "Authorization": "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"
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

