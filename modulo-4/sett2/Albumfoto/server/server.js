const express = require('express')
const bodyparser = require('body-parser')
const app = express()
app.use(bodyparser.json())
const port = 3001
const persistance = require('./persistance')

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
})

app.get('/', (req, res) => {
    res.json({ msg: 'Album API' })
})

app.get('/album', async (req, res) => {
    res.json(await persistance.selectAll())
})

app.post('/album', async (req, res) => {
    let photo = req.body
    if (!photo.imgURL) {
        res.status(422).json({ err: true, msg: "Dati inseriti non coerenti" })
    } else {
        await persistance.insert(photo)
        res.status(201).send()
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})