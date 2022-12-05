exports.handler = async (event, context) => {
    return {
        statusCode: 200,
        // body always has to return a string, ie JSON.stringify(result)
        body: 'Welcome to the serverless world! Click a link below to go to a topic',
    };
};
