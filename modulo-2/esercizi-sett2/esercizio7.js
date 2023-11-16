// scegliere un array di mappe
// ogni singola mappa deve avere come lato di dx un numero
// resituire la somma di tutti i numeri

let arr = [
    { a: 2, b: 4, c: 9 },
    { d: 5, e: 1, f: 7 }
]

let res = 0


for (let i = 0; i < arr.length; i++) { // per ogni mappa di arr
    let current = arr[i] // prendo una delle due mappe
    let values = Object.values(current) // prendo i valori della mappa corrente
    for (let j = 0; j < values.length; j++) { // per ogni valore della mappa corrente
        res = res + values[j] // faccio la somma
    }
}

console.log(res)
