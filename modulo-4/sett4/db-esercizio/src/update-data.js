const { MongoClient } = require("mongodb");

// Replace the following with your Atlas connection string                                                                                                                                        
const url = "mongodb+srv://giuliapro:ciacomeva23@cluster0.howyp6i.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(url);

// Reference the database to use
const dbName = "gettingStarted";

async function run() {
    try {
        // Connect to the Atlas cluster
        await client.connect();
        const db = client.db(dbName);

        // Reference the "people" collection in the specified database
        const col = db.collection("people");

        // Find and update the document
        const filter = { "name.last": "Turing" };
        const document = await col.updateOne(filter, { $set: { dead: true } });
        console.log("Document found:\n" + JSON.stringify(document));

    } catch (err) {
        console.log(err.stack);
    }

    finally {
        await client.close();
    }
}

run().catch(console.dir);
