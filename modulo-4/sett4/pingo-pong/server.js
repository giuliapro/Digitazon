// Inizializza il server Express e alcune variabili globali

const express = require('express')
const app = express()

let port
let otherServer = ''
let random = randomIntFromInterval(1, 100)





// Definisce una route per la richiesta PUT a '/start'
// Quando questa route viene chiamata, imposta l'URL dell'altro server
// e chiama la funzione 'guessNumber' asincronamente.

// assumo che url nella req sia sempre corretto
// quindi non ne testo il contenuto
app.put('/start', async (req, res) => {
    const url = req.query.url
    otherServer = url
    console.log(`other server url: ${otherServer}`)

    await guessNumber(otherServer)

    res.send()
})






// Definisce una route per la richiesta GET a '/try/:guess'
// Se il numero è stato indovinato, restituisce { guessed: true }
// Altrimenti, imposta l'URL dell'altro server se non è già stato impostato,
// chiamando la funzione 'guessNumber' asincronamente.

app.get('/try/:guess', async (req, res) => {
    const guess = req.params.guess
    if (guess == random) {
        console.log(`number was guessed (${random}), going at rest`)
        res.json({ guessed: true })
    } else {
        console.log(`number wasnt guessed (guess: ${guess}, number: ${random})`)
        // siamo nel caso in cui il numero non e' stato individuato
        // quindi devo fare una chiamata da questo server all'altro
        // quale e' l'url dell'altro server?
        // 1) potrebbe essere dentro otherServer se lo start e' stato fatto qui
        // 2) potrebbe non esserci se lo start e' stato fatto altrove
        if (!otherServer) {
            otherServer = req.headers['x-origin']
        }
        res.json({ guessed: false })
        const result = await guessNumber(otherServer)
        console.log(`my turn now: ${result[1]}`)
        if (result[0]) {
            console.log(`this server guessed the number ${result[1]}`)
        }
    }
})






// Funzione asincrona che genera un numero casuale tra 1 e 100,
// invia questo numero all'URL fornito e restituisce un array (perché ho due valori)
// indicando se il numero è stato indovinato e il numero stesso.

async function guessNumber(url) {
    // indovina un numero tra 1 e 100
    // invia questo numero all'url
    // ha indovinato?
    //   se si ho finito
    //   (se no l'altro server dovra' fare la chiamata) non ci interessa realmente in questa funzione, lo scriviamo solo come reminder

    const guess = randomIntFromInterval(1, 100)
    const res = await fetch(`${url}/try/${guess}`, {
        headers: {
            'x-origin': `http://localhost:${port}`
        }
    })
    const json = await res.json()
    return [json.guessed, guess]
}





// Funzione per generare un numero casuale in un intervallo specificato.

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}





// Funzione per avviare il server su una porta specifica.
// Se la porta è specificata come argomento da riga di comando, avvia il server.

function start(p) {
    port = p
    app.listen(port, () => {
        console.log(`server started on port ${port}, and thought ${random}`)
    })
}

if (process.argv[2]) {
    port = process.argv[2]
    start(process.argv[2])
}





// Esporta la funzione 'start' per eventuali test o riuso in altri file.

module.exports = start