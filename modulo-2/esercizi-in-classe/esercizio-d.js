// date due variabili a e b che contengono numeri stampare a video la stringa risultante
// che si ottiene sottraendo alternativamente 1 da a e 2 da b
// fermandosi quando uno dei due arriva a 0

let a = 4
let b = 7
let res = ""

while (a > 0 && b > 0) { // fintanto che la a è magg di 0 e la b è magg di 0
    res = res + a + b + " "
    a = a - 1
    b = b - 2
}
console.log(res)