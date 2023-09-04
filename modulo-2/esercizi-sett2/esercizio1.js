// come usare le mappe

let string = "oh captain my captain!"
let occurrencies = {}

// non possiamo creare 25 variabili e 25 if, perciò:

for (let i = 0; i < string.length; i++) {
    let letter = string[i]
    // non possiamo semplicemente aggiungere +1 al conteggio
    // perché incontrando ! darebbe NaN come risultato
    if (occurrencies[letter]) {
        occurrencies[letter] = occurrencies[letter] + 1
    } else {
        occurrencies[letter] = 1
        // gli sto dicendo che se incontro un qualsiasi carattere che non sia una lettera
        // allora deve comportardi così
    }  
}