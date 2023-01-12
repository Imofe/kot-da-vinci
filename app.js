import { MongoClient } from 'mongodb';

export default async function handler(index) {

    const uri = "mongodb+srv://admin:qwerty12345@cluster0.j9yd1zx.mongodb.net/app?retryWrites=true&w=majority";
    const client = new MongoClient(uri);


    try {
        await client.connect();
        const variant = client.db('variants').collection('variant1')
        const answers = await variant.findOne({})
        return answers[index]


    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }


}




// const {MongoClient} = require('mongodb');

// const client = new MongoClient("mongodb+srv://admin:qwerty12345@cluster0.j9yd1zx.mongodb.net/app?retryWrites=true&w=majority");

// const getAnswer = async () => {
//     await client.connect()
//     const variant = client.db('variants').collection('variant1')
//     const answers = await variant.findOne({})
//     const answer = answers[1]
//     return answer
// }

// printAnswer();


