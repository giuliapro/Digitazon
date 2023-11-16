// Importa il modulo Express, un framework per creare server web con Node.js
const express = require('express')
// Installa il modulo per parsare il body (consente di leggere le richieste POST)
const bodyParser = require('body-parser');

const app = express()
const port = 3000

// Uso il middleware bodyParser per parsare il corpo delle richieste in formato JSON
app.use(bodyParser.json());




// L'array che rappresenta la risorsa
let myArray = ['Giulia', 'Chiara', 'Giorgia'];

// Endpoint per ottenere l'array completo
app.get('/array', (req, res) => {
  res.json(myArray);
});

// Endpoint per aggiungere un elemento all'array
app.post('/array', (req, res) => {
    const nuovoElemento = req.body.elemento

    if (nuovoElemento) {
        myArray.push(nuovoElemento)
        res.json({ messaggio: 'Elemento aggiunto.', array: myArray})
    } else {
        res.status(400).json({ errore: 'Il corpo della richiesta deve includere il campo elemento.'})
    }
})

// Endopoint per rimuovere l'ultimo elemento dell'array
app.put('/array', (req, res) => {
    if (myArray.length > 0) {
        const elementoRimosso = myArray.pop()
        res.json({ messaggio: 'Ultimo elemento rimosso.', elementoRimosso, array: myArray})
    } else {
        res.status(404).json({ errore: 'L\'array è vuoto.'})
    }
})




// Avvia il server Express sulla porta specificata e stampa un messaggio quando il server è in ascolto
app.listen(port, () => {
    console.log(`Server in ascolto sulla porta ${port}`);
});