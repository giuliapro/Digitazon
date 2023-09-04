// funzione che contiene un array
// e ritorna un array con solo numeri pari

function even(arr) {
    let res = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) { // punto in cui devo operare una scelta
            res.push(arr[i])
        }
    }
    return res
}

// funzione che ritorna tutti i numeri > 0

function positive(arr) {
    let res = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) { // punto in cui devo operare una scelta
            res.push(arr[i])
        }
    }
    return res
}

// funzione che filtra l'array

function filter(arr, predicate) {
    let res = []
    for (let i = 0; i < arr.length; i++) {
        if (predicate(arr[i])) { // punto in cui devo operare una scelta
            res.push(arr[i])
        }
    }
    return res
}

console.log(filter([1,2,3,4,-4,-4,-1,0], n => n > 0))

// funzione reduce (fold)

function reduce(arr, init, funx) {
    let res = init
    for (let i = 0; i < arr.length; i++) {
        res = funx(res, arr[i])
    }
    return res
}

let arr = [1,2,3]
let init = 0
let funx = function(res, n) {
    res = n + 1
    return res
}

console.log(reduce(arr, init, funx))
