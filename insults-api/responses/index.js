function sendResponse(status, data) {
    return {
        statusCode: status,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ data }),  // tu wysylam objekt
    };
}

exports.sendResponse = sendResponse;