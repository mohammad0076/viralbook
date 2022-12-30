const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 5000;
require('dotenv').config();

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.9xqik64.mongodb.net/?retryWrites=true&w=majority`;
console.log(uri)
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


const app = express();
app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
    res.send('VIRALBOOK')
})
app.listen(port, () => console.log(`euuuu${port}`))



async function run() {
    try {

        const addcollection = client.db('oobbss').collection('addaproductsss');
        const derCollection = client.db('oobbss').collection('adfafdafafafa')








        app.post('/addedbook', async (req, res) => {
            const add = req.body;
            const result = await addcollection.insertOne(add);
            res.send(result);
        });
        app.get('/addedbook', async (req, res) => {
            const query = {};
            const result = await addcollection.find(query).toArray();
            res.send(result);
        })

        app.post('/commens', async (req, res) => {
            const commen = req.body;
            const results = await derCollection.insertOne(commen);
            res.send(results);
        })
        app.get('/commens', async (req, res) => {
            let query = {};
            if (req.query.email) {
                query = {

                    email: req.query.email
                }
            }
            const cursor = derCollection.find(query);
            const orders = await cursor.toArray();
            res.send(orders)
        });




    }
    finally {

    }
}
run().catch(console.log)