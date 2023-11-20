const express = require('express')
const app = express()
const bodyparser = require('body-parser')
app.use(bodyparser.json())
const fs = require('node:fs/promises');


const port = 3000


// middleware che controlla se l'album c'è
async function validateAlbumName(req, res, next) {
    const albumName = req.params.albumName
    const result = await fs.readFile('./db-album.json')
    const album = JSON.parse(result)
    const singleAlbum = album.find(album => album.name == albumName)
    if (singleAlbum) {
        next()
    } else {
        res.status(404).json({ error: true, msg: 'Album not found' })
    }
}

// ritorna tutti gli album
app.get('/albums', async (req, res) => {
    const result = await fs.readFile('./db-album.json')
    const album = JSON.parse(result)
    res.json(album)
})

app.post('/albums', async (req, res) => {
    const input = req.body
    const date = new Date().toJSON()
    // oggetto da aggiungere
    const albumToAdd = {
        ...input, creationDate: date.slice(0, 10),
        lastModified: date.replace("T", " - ").slice(0, 21)
    }
    const result = await fs.readFile('./db-album.json')
    const album = JSON.parse(result)
    album.push(albumToAdd)
    await fs.writeFile('./db-album.json', JSON.stringify(album))
    res.status(200).json("Album added successfully")
})

app.get('/albums/:albumName', validateAlbumName, async (req, res) => {
    const albumName = req.params.albumName
    const result = await fs.readFile('./db-album.json')
    const albums = JSON.parse(result)
    const singleAlbum = albums.find(album => album.name == albumName)
    res.json(singleAlbum)
})


// assumo che name non venga modificato, ma che possa cambiare solo hashtag
app.put('/albums/:albumName', validateAlbumName, async (req, res) => {
    // prendo il parametro
    const albumName = req.params.albumName
    // ciò che passo nello script
    const changer = req.body
    // prendo l'array del database
    const result = await fs.readFile('./db-album.json')
    // lo parso
    const albums = JSON.parse(result)
    // prendo un singolo album da modificare
    const singleAlbum = albums.find(album => album.name == albumName)
    // prendo l'indice all'interno di album
    let index = albums.indexOf(singleAlbum)
    // modifico hashtag
    singleAlbum.hashtags = changer.hashtags
    date = new Date().toJSON()
    singleAlbum.lastModified = date.replace("T", " - ").slice(0, 21)
    // ora ho l'oggetto che avevo prima ma con le modifiche
    albums[index] = singleAlbum
    await fs.writeFile('./db-album.json', JSON.stringify(albums))
    res.json(result)
})

app.delete('/albums/:albumName', validateAlbumName, async (req, res) => {
    const albumName = req.params.albumName
    const result = await fs.readFile('./db-album.json')
    let albums = JSON.parse(result)
    const singleAlbum = albums.find(album => album.name == albumName)
    let index = albums.indexOf(singleAlbum)
    // funzione che taglia gli elementi, primo parametro è la quantità
    newAlbum = albums.splice(index, 1)
    await fs.writeFile('./db-album.json', JSON.stringify(albums))
    res.status(200).json("Album deleted successfully")
})

// selezionare una singola foto di quel singolo album
app.get('/albums/:albumName/photos', validateAlbumName, async (req, res) => {
    const albumName = req.params.albumName
    const result = await fs.readFile('./db-album.json')
    let albums = JSON.parse(result)
    const singleAlbum = albums.find(album => album.name == albumName)
    res.json(singleAlbum.photos)
})


app.post('/albums/:albumName/photos', validateAlbumName, async (req, res) => {
    const albumName = req.params.albumName
    const input = req.body
    const date = new Date().toJSON()
    const photosToAdd = {
        ...input, creationDate: date.slice(0, 10),
        lastModified: date.replace("T", " - ").slice(0, 21)
    }
    const result = await fs.readFile('./db-album.json')
    let albums = JSON.parse(result)
    const singleAlbum = albums.find(album => album.name == albumName)
    let index = albums.indexOf(singleAlbum)
    const photosSingleAlbum = singleAlbum.photos
    singleAlbum.photos = [...photosSingleAlbum, photosToAdd]
    // ora ho l'oggetto che avevo prima ma con le modifiche
    albums[index] = singleAlbum
    await fs.writeFile('./db-album.json', JSON.stringify(albums))
    res.status(200).json("Photo/s added successfully")
})

app.put('/albums/:albumName/photos/:photoName', validateAlbumName, async (req, res) => {
    // prendo il parametro
    const albumName = req.params.albumName
    const photoName = req.params.photoName
    // ciò che passo nello script
    const changer = req.body
    // prendo l'array del database
    const result = await fs.readFile('./db-album.json')
    // lo parso
    const albums = JSON.parse(result)
    // prendo un singolo album da modificare
    const singleAlbum = albums.find(album => album.name == albumName)
    // prendo l'indice all'interno di album
    let albumIndex = albums.indexOf(singleAlbum)
    
    const photosSingleAlbum = singleAlbum.photos
    // trovo la foto che voglio modificare
    const singlePhoto = photosSingleAlbum.find(photo => photo.name == photoName)
    // prendo il suo indice
    let photoIndex = photosSingleAlbum.indexOf(singlePhoto)
    // modifico gli hashtag
    singlePhoto.hashtags = changer.hashtags
    date = new Date().toJSON()
    singlePhoto.lastModified = date.replace("T", " - ").slice(0, 21)
    // sostituisco la foto
    photosSingleAlbum[photoIndex] = singlePhoto
    // sostituisco l'album
    singleAlbum.photos = photosSingleAlbum
    albums[albumIndex] = singleAlbum
    await fs.writeFile('./db-album.json', JSON.stringify(albums))
    res.json(result)
})

app.delete('/albums/:albumName/photos/:photo', async (req, res) => {
    const albumName = req.params.albumName
    const photoName = req.params.photoName
    const result = await fs.readFile('./db-album.json')
    let albums = JSON.parse(result)
    const singleAlbum = albums.find(album => album.name == albumName)
    let albumIndex= albums.indexOf(singleAlbum)
    const photosSingleAlbum = singleAlbum.photos
    // trovo la foto che voglio modificare
    const singlePhoto = photosSingleAlbum.find(photo => photo.name == photoName)
    // prendo il suo indice
    let photoIndex = photosSingleAlbum.indexOf(singlePhoto)
    // funzione che taglia gli elementi, primo parametro è la quantità
    let deletedPhoto = photosSingleAlbum.splice(photoIndex, 1)
    singleAlbum.photos = photosSingleAlbum
    albums[albumIndex] = singleAlbum
    await fs.writeFile('./db-album.json', JSON.stringify(albums))
    res.status(200).json("Album deleted successfully")
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})