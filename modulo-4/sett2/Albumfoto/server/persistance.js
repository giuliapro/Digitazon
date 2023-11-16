const fs = require('node:fs/promises');

async function selectAll() {
    const contents = await fs.readFile('./db.json')
    const contentsAsString = contents.toString()
    const album = JSON.parse(contentsAsString)
    return album
}

module.exports = { selectAll, nextId, insert }

let ultimoId = 1

function nextId() {
    ultimoId += 1
    return ultimoId
}

async function insert(photo) {
    let album = await selectAll()
    album.push(photo)
    await fs.writeFile('./db.json', JSON.stringify(album))
}