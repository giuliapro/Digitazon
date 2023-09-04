// come usare le funzioni su un esempio già visto

let input = 15
let xsToDraw = 0

for (let row = 0; row < input; row++) {
    xsToDraw++
    // usiamo qui la funzione
    printXs(xsToDraw) // passo l'argomento alla funzione
}

for (let row = input - 1; row > 0; row--) {
    xsToDraw--
    printXs(xsToDraw)
}

// definisco la funzione
function printXs(xsToDraw) {
    let xs = ""
    for (let i = 0; i < xsToDraw; i++) {
        xs += "x"
    }
    console.log(xs)
}