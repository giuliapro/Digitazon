// dato un array casuale, mettere in un array tutti i numeri pari
// e in un altro array tutti i dispari

let array = [1, 3, 6, 9, 34, 67, 20, 26, 90, 79]
let arrayPari = []
let arrayDispari = []

for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
        arrayPari.push(array[i])
    } else {
        arrayDispari.push(array[i])
    }
}
console.log('Numeri pari: ' + arrayPari)
console.log('Numeri dispari: ' + arrayDispari)