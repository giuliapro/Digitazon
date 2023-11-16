const bodyParser = require('body-parser')
const express = require('express')
const app = express()
app.use(bodyParser.json())
const port = 3000
const prossimoId = 3
let contatti = [
  {
    id: 1,
    nome: 'Mario',
    cognome: 'Rossi',
    numero: '3331624067'
  },
  {
    id: 2,
    nome: 'Gianni',
    cognome: 'Bianchi',
    numero: '3409099723'
  }
]

app.get('/contatti/ricerca', (req, res) => {
  let contattiTrovati = []
  for (let i = 0; i < contatti.length; i++) {
    if (
      contatti[i].nome.includes(req.query.q) ||
      contatti[i].cognome.includes(req.query.q) ||
      contatti[i].numero.includes(req.query.q)
    ) { // se la query è inclusa da qualche parte nei contatti
      contattiTrovati.push(contatti[i])
    }
  }
  console.log(req.query)
  if (contattiTrovati.length === 0) {
    res.status(404).json({ err: true, msg: 'Contatto non trovato' })
  } else {
    res.json(contattiTrovati)
  }
})

app.get('/contatti', (req, res) => {
  res.json(contatti)
})

app.get('/', (req, res) => {
  res.send('Hello world!')
})

app.post('/contatti', (req, res) => {
  let contatto = req.body
  if (typeof contatto.nome != 'string' || typeof contatto.cognome != 'string') {
    res.status(422).json({ err: true, msg: 'Dati inseriti non coerenti' })
  } else {
    ultimoId += 1
    contatti.push({id: ultimoId, ...contatto})
    res.status(201).send()
  }
})

app.delete('/contatti/:id', (req, res) => {

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

