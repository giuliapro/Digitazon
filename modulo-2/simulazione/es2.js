// Scrivere una funzione che, dato in ingresso un array di oggetti così strutturato: (foto)
// sia in grado di attribuire un valore di default dove sia presente un null, seguendo queste
// regole:
// * se il type e’ “boolean” deve aggiornare usando false
// * se il type e’ “string” deve aggiornare usando stringa vuota
// * se il type e’ “number” deve aggiornare usando 0
// * se il type e’ “array” deve aggiornare usando array vuoto
// * se il type e’ “object” deve aggiornare usando oggetto vuoto
// Come vedete ogni singolo oggetto ha sempre due attributi, uno la cui chiave non e’ dato a
// sapere a priori, un altro la cui chiave e’ sempre “type” e il valore e’ nella lista qui sopra.
// La funzione deve ritornare lo stesso oggetto ricevuto in input, con i valori aggiornati.

// ciclare su tutti gli oggetti
//      prendo la proprietà type dell'oggetto
//      in base alle regole
//      aggiorno l'altra chiave
// come prendo l'altra chiave?
// sono nella situazione di avere due chiavi, se conosco una delle due
// ok ma...come la prendo...sigh...

let arr = [
    {
        'maggiorenne': null,
        'type': 'boolean'
    },
    {
        'nome': null,
        'type': 'string'
    },
    {
        'cognome': 'Rossi',
        'type': 'string'
    },
    {
        'eta': null,
        'type': 'number'
    },
    {
        'altezzapeso': null,
        'type': 'array'
    },
    {
        'indirizzo': null,
        'type': 'object'
    }
]

function choose(keys) {
    // if (keys[0] == 'type') { // se la chiave che conosco (quindi 'type') è alla posizione 0
    //     return keys[1] // allora la chiave che non sconosco sarà alla posizione 1
    // } else { // altrimenti
    //     return keys[0] // sarà alla posizione 0
    // }
    return keys[0] === 'type' ? keys[1] : keys[0]
}

function update(arr) {
    for (let i = 0; i < arr.length; i++) {
        let current = arr[i]
        let type = current.type
        let key = choose(Object.keys(current)) // prendo l'altra chiave grazie alla funzione scritta sopra
        
        if (current[key] !== null) { // guardia
            continue
        }
       
        if (type === 'boolean') {
            current[key] = false
        } else if (type === 'string') {
            current[key] = ''
        } else if (type === 'number') {
            current[key] = 0
        } else if (type === 'array') {
            current[key] = []
        } else if (type === 'object') {
            current[key] = {}
        }
    }
}

update(arr)
console.log(arr)