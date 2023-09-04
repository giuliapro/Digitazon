// scrivere una funzione che accetta un array arr e una funzione fn
// la funzione applica fn a ogni elemento avente indice pari di arr
// e pusha il risultato dentro un nuovo array

function f1(arr, fn) {
    let res = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            res.push(fn(arr[i]))
        }
    }
    return res
}

console.log(f1([1,2,3,5,7,12,34], n => n + 4))