import { items } from './data/data.js';

export async function handler(event, context) {
    return {
        statusCode: 200,
        body: JSON.stringify(items),
    };
}
