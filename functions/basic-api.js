import { items } from 'https://serverless-funx.netlify.app/data/data.js';

export async function handler() {
    return {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        },
        statusCode: 200,
        body: JSON.stringify(items),
    };
}
