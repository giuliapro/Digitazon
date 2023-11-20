const express = require('express')
const app = express()
require('dotenv').config()
const run = require('./select-data')

app.get('/people', async (req, res) => {
    const result = await run()
    res.json(result)
})
app.get('/people/:id', async (req, res) => {
    const id = req.params.id
    const result = await run(id)
    res.json(result)
})

app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server running on port ${process.env.SERVER_PORT}`)
})