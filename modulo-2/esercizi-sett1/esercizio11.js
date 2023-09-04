// creare una sorta di bandiera con una lettera a caso

let righe = 5

for (let i = 1; i <= righe; i++) { // questo ci dice su quale riga siamo
    let xs = ""
    for (let x = 0; x < i; x++) { // questo dice quante x aggiungere
        xs += "x"
    }
    console.log(xs)
}
for (let i = (righe - 1); i >= 0; i--) { // questo ci dice su quale riga siamo (-1 perché quella da 3 non va ripetuta)
    let xs = ""
    for (let x = 0; x < i; x++) { // questo dice quante x aggiungere
        xs += "x"
    }
    console.log(xs)
}

// soluzione di alberto (c'è un bug, trovalo!!)

// let input = 6
// rows = (2 * input) - 1

// let xsToDraw = 1
// crossedHalfway = false

// while (rows > 0) {
//     let xs = "-"
//     for (let i = 0; i < xsToDraw; i++) {
//          xs += "x"
//     }
//     console.log(xs)
//     if (xsToDraw < (rows / 2) + 1 && !crossedHalfway) {
//          xsToDraw++
//     } else {
//          crossedHalfway = true
//          xsToDraw--
//     }
//     rows--
// }