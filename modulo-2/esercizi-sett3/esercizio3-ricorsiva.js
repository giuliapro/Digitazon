// scrivere una funzione ricorsiva che sommi tutti i numeri di un array
// scheletro: console.log(sum[1,2,3,4,5], 0)

function sum(arr, i) {
    if (i == arr.length) { // se l'array è vuoto
        return 0 // allora la somma è 0
    }
    return arr[i] + sum(arr, i + 1) // questo è il ciclo,
    // gli dico che devo sommare ogni elemento dell'arr
    // usando la funzione sum, che prende come argomenti (arr, i)
}

console.log(sum([1,2,3,4,5], 0))