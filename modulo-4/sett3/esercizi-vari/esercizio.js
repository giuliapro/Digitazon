// creare un server dove è possibile:

// ottenere tutti i file e le cartelle di un dato percorso;
// quando ci viene specificato un path, dobbiamo mostrare
// tutti i file e le cartelle con struttura dati json
// esempio: /filesystem?path=/Users/Alberto/Desktop
// perché devo usare la querystring?
// cosa succede se cerco un path che non esiste?
// e se cerco un path su cui non ho diritti di lettura?

// creare un endpoint che sia in grado di creare un file
// esempio: POST /filesystem/file
// 2 scenari:
// crea un file vuoto;
// se viene passata una opportuna querystring,
// inserisce nel file il contenuto specificato nel valore
// della chiave nella querystring (creare un file tramite http)

// ***
// creare più file in batch (fare un'azione ripetuta n volte)
// esempio: POST /filesystem/files/batch/n
// funziona come sopra solo che fa la stessa azione n volte
// NB. NON duplicare codice tra le due rotte
// NB. tassativo aspettare 20 sec dopo la creazione del singolo file
// NB. NON fare operazioni sincrone
// questa rotta deve ritornare 202 (accepted) non appena chiamata, e
// nel json di risposta ritornerà un id univoco: questo id può essere
// utilizzato per capire a che punto è la creazione di file
// in questo modo: GET /filesystem/files/:name/batch/:id

// DELETE /filesystem/files ocioooooo
// consentire la cancellazione di file solo all'interno di un
// percorso sicuro stabilito a priori
// esempio: DELETE /filesystem/files?path=/Users/Alberto/Desktop/MiaCartella
// SOLO percorsi da un certo percorso sicuro in poi
// se non siamo sicuri, non fare questa parte

// **
// endpoint di aggiornamento
// esempio: PUT /filesystem/files?path=/Users/Alberto/Desktop/text.txt
// il contenuto del file viene aggiornato con ciò che specifichiamo
// nella querystring, quindi potenzialmente rimuove tutti i
// contenuti del file

// Importa il modulo Express, un framework per creare server web con Node.js
const express = require('express')
// Importa il modulo fs per interagire con il file system di Node.js
// La versione .promises fornisce funzioni basate su Promises, rendendo più agevole la gestione asincrona
const fs = require('fs').promises
// Importa il modulo path per gestire e manipolare percorsi di file
const path = require('path')
// Installa il modulo per parsare il body (consente di leggere le richieste POST)
const bodyParser = require('body-parser');

const app = express()
const port = 3000

// Middleware per il parsing del corpo della richiesta (usato per leggere il corpo di una richiesta POST o PUT)
app.use(bodyParser.text());

// primo endpoint:
// In questo esempio, l'endpoint /filesystem accetta un parametro path
// dalla query string e restituisce una risposta JSON contenente i
// dettagli dei file e delle cartelle nel percorso specificato.
// Assicurati di avere installato i moduli necessari con npm install express
// e npm install fs.promises prima di eseguire il codice.

app.get('/filesystem', async (req, res) => {
    // Ottiene il percorso dalla querystring della richiesta
    // Se non è presente, imposta il percorso di base come stringa vuota
    const basePath = req.query.path || ''
    // Combina il percorso di base con la directory corrente per ottenere il percorso completo
    const fullPath = path.join(__dirname, basePath)

    // Utilizza un blocco try-catch per gestire eventuali errori durante
    // l'esecuzione del blocco codice di try
    try {
        // Legge il contenuto della directory specificata asincronicamente
        // e aspetta il risultato con wait
        const files = await fs.readdir(fullPath)
        // Mappa i file in un array di oggetti json, contenenti
        // informazioni come il nome del file, se è una cartella o meno,
        // e il percorso completo
        const data = files.map(file => {
            const filePath = path.join(basePath, file)
            return {
                name: file,
                // isDirectory: fs.statSync(path.join(fullPath, file)).isDirectory(),
                path: filePath
            }
        })
        // Invia una risposta al client in formato json, contenente
        // i dettagli dei file e delle cartelle
        res.json(data)
    } catch (error) { // se si verifica un errore, invia una risposta di errore
        // con stato http 500 e messaggio di errore json
        console.log(error)
        res.status(500).json({ error: 'Errore nel recupero dei file.' })
    }
})



// secondo endpoint:
// In questo esempio, ho utilizzato il middleware body-parser per consentire la
// lettura del corpo della richiesta POST. Il parametro req.query.filename viene
// utilizzato per ottenere il nome del file dalla query string, e req.query.content
// viene utilizzato per ottenere il contenuto dalla query string

app.post('/filesystem/file', async (req, res) => {
    // Ottieni il nome del file dalla query string o usa un nome predefinito
    const filePath = path.join(__dirname, req.query.filename || 'newfile.txt')

    try {
        if (req.query.content) {
            // Se è presente il parametro 'content' nella query string, scrivi il contenuto nel file
            await fs.writeFile(filePath, req.query.content)
        } else {
            // Altrimenti, crea un file vuoto
            await fs.writeFile(filePath, '')
        }
        res.json({ success: true, message: 'File creato con successo.' })
    } catch { error } {
        // res.status(500).json({ error: 'Errore nella creazione del file.' });
    }
})




// terzo endpoint:
// In questo esempio, ho aggiunto un nuovo endpoint POST /filesystem/files/batch/:count
// per avviare la creazione dei file in batch. L'ID univoco generato per il batch
// può essere utilizzato per verificare lo stato dell'operazione con l'endpoint
// GET /filesystem/files/:batchId/batch/:id
// La creazione dei file avviene in modo asincrono e la risposta per
// il primo endpoint è un codice di stato 202 (Accepted).

// Conserva lo stato delle operazioni in batch
let batchTasks = {};
// Inizializzia il contatore dei batch
let currentBatchId = 0;

// Una funzione asincrona che scrive il contenuto in un file e attende 20 secondi
// Viene utilizzata per simulare l'operazione di creazione del file
async function createFile(filePath, content) {
    try {
        await fs.writeFile(filePath, content);
        await new Promise(resolve => setTimeout(resolve, 20000)); // Aspetta 20 secondi
    } catch (error) {
        console.error('Errore nella creazione del file:', error);
        // Gestisci gli errori qui se necessario
    }
}

// Endpoint per la creazione di file in batch
app.post('/filesystem/files/batch/:count', async (req, res) => {
    // Ottiene il numero di file da creare dal parametro count nella richiesta
    const count = parseInt(req.params.count, 10);

    // Incrementa il contatore e assegna il nuovo valore a currentBatchId
    currentBatchId++;

    // Convertito da currentBatchId in stringa, batchId è l'ID univoco del batch corrente
    const batchId = currentBatchId.toString();
    // Aggiunge un'entry a batchTasks per tenere traccia dello stato del batch
    batchTasks[batchId] = { count, completed: 0 };

    res.status(202).json({ batchId, status: 'In attesa di completamento.' });

    for (let i = 0; i < count; i++) {
        // Nome del file univoco
        const fileName = `file_${i + 1}_${batchId}.txt`;
        const filePath = path.join(__dirname, fileName);
        // Utilizza il corpo della richiesta come contenuto (vuoto di default)
        const content = req.body || '';

        // Avvia la creazione del file in modo asincrono
        try {
            await createFile(filePath, content);
            batchTasks[batchId].completed++;

            // Se tutti i file sono stati completati, rimuovi l'ID dallo stato
            if (batchTasks[batchId].completed === count) {
                batchTasks[batchId] = true
            }
        } catch (error) {
            console.error(`Errore nella creazione del file ${fileName}:`, error);
            // Gestisci gli errori qui se necessario
        }
    }
});

// Endpoint per verificare lo stato della creazione dei file in batch
app.get('/filesystem/files/batch/:id', (req, res) => {
    // Destructuring per estrarre valori da un oggetto in modo conciso e assegnarli a variabili separate
    // req.params è un oggetto che contiene i parametri della richiesta
    // Questo serve per estrarre i valori batchId e id dalla parte dei parametri dell'URL della richiesta
    const { batchId, id } = req.params;

    if (batchTasks[batchId]) {
        const { completed } = batchTasks[batchId];
        return res.json({ completed })
    }

    res.status(404).json({ error: 'ID batch non valido' });

});





// quinto endpoint (il quarto lo balzo ho paura):
// In questo esempio, l'endpoint PUT /filesystem/files accetta il percorso del file
// nella query string (req.query.path) e il nuovo contenuto nel corpo della richiesta (req.body)
// La funzione writeFile sovrascrive il contenuto del file con il nuovo testo specificato
// La risposta indica se l'operazione è stata eseguita con successo o se si è verificato un errore.

app.put('/filesystem/files', async (req, res) => {
    // Ottiene il percorso del file dalla querystring della richiesta
    const filePath = req.query.path

    // Verifica se il percorso del file è stato specificato nella query string
    // Se non è presente, restituisce un errore con uno stato HTTP 400 (Bad Request)
    if (!filePath) {
        return res.status(400).json({ error: 'Specificare il percorso del file nella query string.' })
    }

    try {
        // Sovrascrivi il file con il nuovo contenuto
        await fs.writeFile(filePath, req.body || '')
        // Invia una risposta JSON indicando che l'operazione è stata eseguita con successo
        res.json({ success: true, message: 'Contenuto del file aggiornato con successo.' })
    } catch { error } {
        res.status(500).json({ error: 'Errore nell\'aggiornamento del file.' })
    }
})




// Avvia il server Express sulla porta specificata e stampa un messaggio quando il server è in ascolto
app.listen(port, () => {
    console.log(`Server in ascolto sulla porta ${port}`);
});