import data from '../../data/data.json' assert { type: 'json' };
export async function handler() {
    return {
        // headers: {
        //     'Access-Control-Allow-Origin': '*',
        //     'Content-Type': 'application/json',
        // },
        statusCode: 200,
        body: JSON.stringify(data),
    };
}
