// esercizio con array, contare i numeri pari e i numeri dispari

let array = [1, 3, 4, 0, 7, 8, 12]
let countPari = 0
let countDispari = 0

for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
        countPari++
    } else {
        countDispari++
    }
}
console.log(countPari, countDispari)