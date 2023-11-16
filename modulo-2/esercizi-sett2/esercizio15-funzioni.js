function double(arr) {
    let res = []
    for (let i = 0; i < arr.length; i++) {
        res.push(arr[i] * 2) // differenza
    }
    return res
}

function plus1(arr) {
    let res = []
    for (let i = 0; i < arr.length; i++) {
        res.push(arr[i] + 1) // differenza
    }
    return res
}

function plus42(arr) {
    let res = []
    for (let i = 0; i < arr.length; i++) {
        res.push(arr[i] + 42) // differenza
    }
    return res
}

// refactor

function sum1(n) {
    return n + 1
}

function mul3(n) {
    return n * 3
}

function map(arr, funx) { // funx sarebbe sum1, le ho dato il nome che voglio io
    let res = []
    for (let i = 0; i < arr.length; i++) {
        res.push(funx(arr[i])) // differenza
    }
    return res
}

map([1,2,3], sum1)

console.log(map([1,2,3], sum1))
console.log(map([1,2,3], mul3))

console.log(map([1,2,3], function(n) { return n * n}))
console.log(map([1,2,3,4,5,6], n => n % 2 == 0))

// funzione anonima

let isEven = function(n) {
    if (n % 2 == 0) {
        return true
    } else {
        return false
    }
}

// semplificato

let isEvenSimplified = function(n) {
    return n % 2 == 0
}

// arrow function

let isEvenArrow = n => n % 2 == 0

console.log(map([1,2,3], n => n + 5)) // qui specifico il comportamento e non cambio mai la funzione
