const { sendResponse } = require('../../responses/index.js');

const insults = [
    {
        "insult": "Peace! I will not endure thy lies.",
        "play": "Much Ado About Nothing"
    },
    {
        "insult": "Thy tongue outvenoms all the worms of Nile.",
        "play": "Cymbeline"
    },
    {
        "insult": "Thou crusty batch of nature!",
        "play": "Troilus and Cressida"
    }
];

exports.handler = async (event) => {
    const { id } = event.pathParameters;


    return sendResponse(200, insults[parseInt(id)]);  // tu wysylam objekt

};
