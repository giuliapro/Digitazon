// scrivere una funzione che prende in ingresso un array di numeri
// e ritorna un array che alla posizione 0 ha il numero piu'
// piccolo presente nell'array, e alla posizione 1 il numero
// piu' grande presente nell'array

function func(arr) {
    let arr2 = []
    let min = 1
    let max = 1
    for (let i = 0; i < arr.length; i++) {
        let current = arr[i]
        if (current <= min) {
            min = current
        } else if (current > max) {
            max = current
        }  
    }
    arr2.push(min, max)
    return arr2
}

console.log(func([1,2,3,4,5]))