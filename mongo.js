const mongoDB = require('mongodb')
const mongoClient = mongoDB.MongoClient 
const Url = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_URL}:${process.env.DB_PASSWORD}`

async function run() {
    try {
        const client = new mongoClient(Url)
        await client.connect()
        const db = client.db('wecreative')
        const collection = db.collection('users')
        const cursor = collection.find({})
        const data = await cursor.toArray()
        await collection.update(
            {

            }
        )
        client.close
    } catch(error) {
        console.log(error)
    }
}
run()