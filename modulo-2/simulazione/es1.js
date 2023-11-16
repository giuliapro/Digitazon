// Scrivere una funzione che riceva in ingresso tre stringhe:
// * la prima sara’ un testo
// * la seconda sara’ una parola che andra’ cercata nel testo
// * la terza sara’ la parola da sostituire al posto della seconda
// La funzione deve quindi produrre lo stesso effetto che si ottiene quando si fa find and
// replace di una parola in un testo.
// Si assuma che:
// * la seconda e la terza stringa siano sempre e solo una parola, mai una frase, quindi
// non ci saranno spazi
// * sulle stringhe non esistano i metodi indexOf, replace, e similari, dovete scrivere voi
// l’algoritmo
// * la seconda e la terza parola non necessariamente devono avere lo stesso numero di
// caratteri
// Ricordate che le stringhe in JavaScript sono trattate in modo simile agli array.
// La funzione deve ritornare la nuova stringa aggiornata.

// seconda funzione:
// variabile con array da ritornare
// ciclo sulla str1
// fintanto che non c'è uno spazio,
// accumulo dentro una variabile temporanea
// quando vedo lo spazio metto la stringa accumulata nell'array
// e svuoto la stringa

// terza funzione che accetta le altre due:
// ciclo sulle stringhe

function funzStr(str1, str2, str3) {
    let currentStr = ''
    for (let i = 0; i < str2.length; i++) {
        currentStr += str1[i] 
    }
    if (currentStr === str2) {
        str4 = str1.slice(4) // senza questo metodo non riuscivo a toglierla
        str5 = str3 + str4
    }
    return str5
}

console.log(funzStr('ciao come va', 'ciao', 'hey'))

// funziona solo se la parola da sostituire è all'inizio