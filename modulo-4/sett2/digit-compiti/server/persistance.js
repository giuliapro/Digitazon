const fs = require('node:fs/promises');

async function selectAll() {
    const contents = await fs.readFile('./db.json')
    const contentsAsString = contents.toString()
    const users = JSON.parse(contentsAsString)
    return users
}

let ultimoId = 3

function nextId() {
    ultimoId += 1
    return ultimoId
}

async function insert(user) {
    let users = await selectAll()
    users.push(user)
    await fs.writeFile('./db.json', JSON.stringify(users))
}

module.exports = { selectAll, nextId, insert }