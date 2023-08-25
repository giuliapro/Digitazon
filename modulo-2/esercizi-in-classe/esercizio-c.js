// date tre variabili a, b, c
// stamparle in ordine dalla piu' grande alla piu' piccola

let a = 42
let b = 174
let c = 102

if (a > b) {
    if (a > c) {
        if (b > c) {
            console.log(a, b, c)
        } else {
            console.log(a, c, b)
        }
    }
}
if (b > a) {
    if (b > c) {
        if (a > c) {
            console.log(b, a, c)
        } else {
            console.log(b, c, a)
        }
    }
}
if (c > a) {
    if (c > b) {
        if (a > b) {
            console.log(c, a, b)
        } else {
            console.log(c, b, a)
        }
    }
}