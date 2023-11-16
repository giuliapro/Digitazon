// esercizio con funzione loop (ciclo for trasposto nel mondo delle funzioni)
// stampare tutti i numeri da 10 a 1

function loop(n) {
    console.log(n) // stampo 10
    n-- // istruzione che dice di andare indietro di posizione
    if (n == 0) { // se n è uguale 0
        return // stampo
    }
    loop(n) // richiamo dentro la funzione la funzione stessa
    // la funzione ricorre su se stessa, perché al suo interno
    // ha tutte le informazioni per comportarsi come ciclo
    // facciamo quindi un "ciclo senza ciclo"
}

(loop(10)) // inizializzazione

// quando si parla di ciclare, a prescindere dalla sintassi
// ciò che dobbiamo fare ha sempre le 4 posizione del ciclo
// "a partire da uno stato, devo ciclare su qualcosa finché una condizione regge"