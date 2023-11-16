const express = require('express');
const axios = require('axios');
const app = express();
const port = 3002;

let opponentServerURL;

// Rotta per iniziare il gioco, imposta l'URL del server avversario
app.put('/start', (req, res) => {
  const { from } = req.query;
  opponentServerURL = from;

  res.send(`Game started. Opponent server URL: ${opponentServerURL}`);
});

const MIN_RANDOM_NUMBER = 1;
const MAX_RANDOM_NUMBER = 100;

// Rotta per fare una mossa di tentativo di indovinare il numero
app.get('/guess/:try', (req, res) => {
  const { try: attempt } = req.params;

  // Genera un numero casuale tra MIN_RANDOM_NUMBER e MAX_RANDOM_NUMBER
  const randomGeneratedNumber = Math.floor(Math.random() * (MAX_RANDOM_NUMBER - MIN_RANDOM_NUMBER + 1) + MIN_RANDOM_NUMBER);

  // Controlla se il numero è stato indovinato
  const isGuessed = attempt === randomGeneratedNumber;

  if (isGuessed) {
    console.log('Server 2 guessed the number!');
    res.send('Number Guessed by Server 2');
  } else {
    // Se il numero non è stato indovinato, fa una mossa chiamando il server avversario
    axios.get(`${opponentServerURL}/guess/${attempt}`)
      .then(response => {
        console.log(response.data);
        res.send(response.data);
      })
      .catch(error => {
        console.error(error);
        res.status(500).send('Internal Server Error');
      });
  }
});

app.listen(port, () => {
    console.log(`Server 2 listening on port ${port}`);
  });