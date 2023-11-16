const express = require('express');
const cors = require('cors'); // Importa il pacchetto cors
const app = express();
const port = 3000;
const persistance = require('./persistance')



app.use(express.json()); // Middleware per il parsing del corpo della richiesta in formato JSON

// Configura il middleware cors
app.use(cors());





// const users = []; // Array per la memorizzazione degli utenti registrati (in un'applicazione reale, dovresti utilizzare un database)

const activeTokens = []; // Array per memorizzare i token di autenticazione degli utenti (in un'applicazione reale, dovresti utilizzare una soluzione più sicura per la gestione delle sessioni e dei token)


app.get('/users', async (req, res) => {
    res.json(await persistance.selectAll())
})


// Endpoint per la registrazione di un nuovo utente
app.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ error: 'Devi fornire username, email e password.' });
    }

    // Verifica se l'utente esiste già
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        return res.status(409).json({ error: "L'utente con questa email è già registrato." });
    }

    // Crea un nuovo utente
    const newUser = { id, username, email, password };
    await persistance.insert(newUser)

    // In un'applicazione reale, dovresti crittografare la password prima di salvarla

    res.status(201).send(); // Restituisce i dati dell'utente appena registrato
});







// Endpoint per il login di un utente
app.post('/login', (req, res) => {
    const { email, password } = req.body

    if (!email || !password) {
        return res.status(400).json({ error: 'Devi fornire email e password.' });
    }

    // Cerca l'utente con l'email fornita
    const user = users.find(user => user.email === email);

    if (!user) {
        return res.status(401).json({ error: 'Email o password non validi.' });
    }

    // In un'applicazione reale, dovresti verificare se la password è corretta utilizzando una libreria di crittografia come bcrypt
    // Qui faremo una semplice verifica
    if (user.password !== password) {
        return res.status(401).json({ error: 'Email o password non validi.' });
    }

    res.json({ message: 'Login riuscito!' });
})





// Middleware per la verifica dell'autenticazione (serve sia per logout che per vedere la lista degli utenti registrati da utente loggato)
function isAuthenticated(req, res, next) {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ error: 'Token di autenticazione non fornito.' });
    }

    // Verifica se il token è attivo
    if (!activeTokens.includes(token)) {
        return res.status(401).json({ error: 'Token di autenticazione non valido.' });
    }

    // Se il token è valido, continua
    next();
}





// Endpoint per il logout di un utente
app.post('/logout', isAuthenticated, (req, res) => {

    // Rimuovi il token dalla lista dei token attivi (simulando il logout)
    activeTokens.splice(tokenIndex, 1); // Rimuovi il token tramkte splice, che accetta l'indice dell'elemento da eliminare
    // e quante posizioni (1) da rimuovere dall'array a partire dall'indice specificato

    res.json({ message: 'Logout riuscito!' });
});






// Endpoint per ottenere la lista di utenti registrati (solo per utenti autenticati)
app.get('/users', isAuthenticated, (req, res) => {
    res.json(users);
});





// Endpoint per ottenere il numero di utenti registrati (accessibile a tutti)
app.get('/userCount', (req, res) => {
    const userCount = users.length;
    res.json({ userCount });
});




// Abbiamo già una funzione che verifica che l'utente è autenticato
// Possiamo però contestualizzarla in un endpoint
app.get('/isLoggedIn', (req, res) => {
    const token = req.header('Authorization');

    if (!token) {
        return res.json({ isLoggedIn: false });
    }

    // Verifica se il token è attivo
    if (activeTokens.includes(token)) {
        return res.json({ isLoggedIn: true });
    } else {
        return res.json({ isLoggedIn: false });
    }
});





app.listen(port, () => {
    console.log(`Il server è in ascolto sulla porta ${port}`);
});

