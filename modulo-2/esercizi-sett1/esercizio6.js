// stampare i numeri da 0 a 10 per 3 volte (versione 2, peggiore rispetto all'esercizio 5)

let k = 0 // va dichiarata fuori perché se la mettessi nel for verrebbe di continuo inizilizzata e perderebbe traccia di quello che è successo prima

for (let i = 0; i <= 10; i++) {
    if (i == 10 && k < 3) { // se i è uguale a 10, allora diventa 0; lo fa finché k è minore di 3
        i = 0
        k = k + 1
    }
    console.log(i)
}

// non esce comunque come l'altro perché me lo stampa 4 volte e lo fa fino a 9
