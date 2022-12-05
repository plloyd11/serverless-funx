import { items } from '../public/data.js';

exports.handler = async (event, context) => {
    return {
        statusCode: 200,
        body: JSON.stringify(items),
    };
};
