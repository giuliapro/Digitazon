// dato un array, dire se è palindromo o meno
// guarda anche le altre soluzioni di alberto

let array = [1, 2, 3, 2, 1]
let palindromo = false
let i = 0
let firstHalf = ""
let secondHalf = ""

for (i = 0; i <= (array.length / 2); i++) {
    firstHalf += + array[i]
}

for (i = (array.length - 1); i >= ((array.length - 1) / 2); i--) {
    secondHalf += array[i]
}

if (firstHalf === secondHalf) {
    palindromo = true
} else {
    palindromo = false
}
console.log(palindromo)