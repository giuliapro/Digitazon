// dato un array e dato un numero, il codice deve ritornare
// la prima coppia di numeri la cui somma deve dare il numero dato

// creo array e creo variabile num
// itero sulle coppie dell'array per trovare quella che dà num
// controllare ogni coppia
// passare a quella successiva

let arr = [1,2,4,7,9,1]
let num = 11

for (let i = 0; i < arr.length - 1; i++) {
    let current = arr[i]
    let next = arr[i + 1]
    if (current + next === num) {
        console.log(current, next)
    }
}