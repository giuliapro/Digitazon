const express = require('express');
const axios = require('axios');
const app = express();
const port = 3001;

let opponentServerURL;

// Rotta per iniziare il gioco, imposta l'URL del server avversario
app.put('/start', (req, res) => {
    // Utilizza il destructuring per estrarre il valore della chiave from dall'oggetto req.query
    // La query string di una richiesta contiene i parametri, e in questo caso, stiamo cercando il valore associato alla chiave from
    // Ad esempio, se la richiesta fosse /start?from=http://localhost:3002, allora from sarebbe uguale a 'http://localhost:3002'
    const { from } = req.query;
    // Assegna il valore estratto da req.query.from alla variabile opponentServerURL
    // Questo significa che ora il server conosce l'URL del server avversario
    opponentServerURL = from;

    // Invia una risposta al client con un messaggio che indica che il gioco è iniziato e include l'URL del server avversario
    // Questo messaggio viene visualizzato sul client che ha fatto la richiesta PUT
    res.send(`Game started. Opponent server URL: ${opponentServerURL}`);
});

const MIN_RANDOM_NUMBER = 1;
const MAX_RANDOM_NUMBER = 100;

// Rotta per fare una mossa di tentativo di indovinare il numero
// Il parametro :try nella rotta è un parametro di percorso che consente di estrarre il valore come req.params.try
app.get('/guess/:try', (req, res) => {
    // Utilizza il destructuring per estrarre il valore del parametro try dalla parte dei parametri di percorso della richiesta
    // Ad esempio, se la richiesta fosse /guess/123, allora attempt sarebbe uguale a '123'.
    const { try: attempt } = req.params;

    // se !opponentServerURL
    // prendo l'url dalla request
    // lo metto dentro opponentServerURL
    

    // Genera un numero casuale tra MIN_RANDOM_NUMBER e MAX_RANDOM_NUMBER
    const randomGeneratedNumber = Math.floor(Math.random() * (MAX_RANDOM_NUMBER - MIN_RANDOM_NUMBER + 1) + MIN_RANDOM_NUMBER);

    // Controlla se il numero è stato indovinato
    const isGuessed = attempt === randomGeneratedNumber;

    // Questa è una struttura condizionale che gestisce due scenari:
    // Se il numero è stato indovinato, il server stampa un messaggio nella console e invia una risposta al client con il messaggio "Number Guessed by Server 1"
    if (isGuessed) {
        console.log('Server 1 guessed the number!');
        res.send('Number Guessed by Server 1');
    } else {
        // Se il numero non è stato indovinato, fa una mossa chiamando il server avversario
        // Fa una chiamata al server avversario, passando il tentativo corrente di indovinare il numero
        // La risposta del server avversario viene gestita nella parte .then(), e eventuali errori vengono gestiti nella parte .catch()
        axios.get(`${opponentServerURL}/guess/${attempt}`)
            .then(response => {
                console.log(response.data);
                res.send(response.data);
            })
            .catch(error => {
                console.error(error);
                console.log(opponentServerURL)
                res.status(500).send('Internal Server Error');
            });
    }
});

app.listen(port, () => {
    console.log(`Server 1 listening on port ${port}`);
});
