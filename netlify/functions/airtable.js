import Airtable from 'airtable-node';
import dotenv from 'dotenv';
dotenv.config();

const airtable = new Airtable({
    apiKey: process.env.AIRTABLE_API,
})
    .base('appFbVKKlBloH3hcu')
    .table('Shows');

export const handler = async (event, context) => {
    try {
        const { records } = await airtable.list();
        const shows = records.map((show) => {
            const { id } = show;
            const { Show, Date } = show.fields;
            return { id, Show, Date };
        });
        console.log(shows);
        return {
            statusCode: 200,
            body: JSON.stringify(shows),
        };
    } catch (error) {
        return {
            statusCode: 200,
            body: 'Server Error',
        };
    }
};
