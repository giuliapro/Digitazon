
const connection = require('./connection')

async function run() {
    let db = await connection()
    const col = db.collection("people");

    // Delete the document into the specified collection        
    const deleteResult = await col.deleteMany({ "name.last": "Turing" });
    console.log('Deleted documents =>', deleteResult);
}

run().catch(console.dir);