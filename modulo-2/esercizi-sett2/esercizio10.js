// dato un array che può contenere numeri, stringhe, booleani, qualsiasi tipo di dato,
// calcolare le occorrenze di ogni tipo di dato

// creo una mappa con tutte le chiavi di ciò che voglio contare
// itero sull'array
// per ogni dato che leggo, uso typeof per vedere che tipo è
// lo inserisco nella chiave corrispondente
// conto le occorrenze delle varie chiavi
// (usare mappe per inserire relazioni)

let arr = [1, 2, 4, 5, 'ciao', 'ok', true, false, true, undefined, { name: 'Giulia' }]

let cont = {}

for (let i = 0; i < arr.length; i++) {
    let type = typeof arr[i]
    if (cont[type]) {
        cont[type] = cont[type] + 1
    } else {
        cont[type] = 1
    }
    // con operatore ternario per abbreviare if...else:
    // cont[type] = cont[type] ? cont[type] + 1 : 1
}

console.log(cont)