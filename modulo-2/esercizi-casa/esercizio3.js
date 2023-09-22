// scrivere una funzione che prende in ingresso un array di numeri
// e ritorna un array che alla posizione 0 ha il numero piu'
// piccolo presente nell'array, e alla posizione 1 il numero
// piu' grande presente nell'array

function func(arr) {
    let arr2 = [] // creo un arr2 vuoto
    let min = 0 // creo la variabile min
    let max = 0 // creo la variabile max 
    for (let i = 0; i < arr.length; i++) { // per ogni elemento di arr
        let current = arr[i] // creo la variabile col valore corrente
        if (current <= min) { // se questo valore è <= a min,
            min = current // min diventa uguale a current
        } else if (current > max) { // altrimenti, se questo valore è > di max,
            max = current // max diventa uguale a current
        }  
    }
    arr2.push(min, max) // una volta ottenuti i miei valori finali, pusho
    return arr2 // ritorno arr2
}

console.log(func([0,1,2,3,4,5]))