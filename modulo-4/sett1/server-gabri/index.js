const express = require('express')
const bodyparser = require('body-parser')
const app = express()
app.use(bodyparser.json())
const port = 3000
let ultimoId = 4
let db = [
  {
    id: 1,
    nome: "mario",
    cognome: "rossi",
    numero: "123456789"
  },
  {
    id: 2,
    nome: "gianni",
    cognome: "bianchi",
    numero: "134345789"
  },
  {
    id: 3,
    nome: "giovanni",
    cognome: "verdi",
    numero: "167676789"
  },
  {
    id: 4,
    nome: "beppe",
    cognome: "vessicchio",
    numero: "14545489"
  }
]

app.get('/', (req, res) => {
  res.send('VA BENE')
})

app.get('/contatti', (req, res) => {
  res.json(db)
})

app.get('/contatti/ricerca', (req, res) => {
  let contattiTrovati = []
  for (let i = 0; i < db.length; i++) {
    if (db[i].nome.includes(req.query.q) ||
      db[i].cognome.includes(req.query.q) ||
      db[i].numero.includes(req.query.q)) {
      contattiTrovati.push(db[i])
    }
  }
  console.log(req.query)
  contattiTrovati.length != 0 ? res.send(contattiTrovati) : res.status(404).json({ err: true, msg: "Nessun contatto corrisponde alla ricerca" })
})

app.post('/contatti', (req, res) => {
  let contatto = req.body
  if (typeof contatto.nome != "string" || typeof contatto.cognome != "string"
    || !contatto.nome || !contatto.cognome) {
    res.status(422).json({ err: true, msg: "Dati inseriti non coerenti" })
  } else {
    ultimoId += 1
    contatto.id = ultimoId
    db.push(contatto)
    res.status(201).send()
  }
})

app.delete('/contatti/:id', (req, res) => {
  const nuovoDb = db.filter(contatto => contatto.id != req.params.id)
  db = nuovoDb
  res.status(200).send()
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

