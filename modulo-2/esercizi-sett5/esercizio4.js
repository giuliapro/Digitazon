// cifratura a zigzag
// 'Ci hanno scoperti, fuggiamo!'

// togliere tutti gli spazi e i caratteri che non sono lettere
// trasformare tutta la stringa in uppercase
// creare 3 righe (array di array)
// 3 cicli:
// 1. per la prima riga:
//      parto da i = 0 e pusho tutti i caratteri
//      saltando al 4° indice (1 seconda riga + 1 terza riga + 1 seconda riga)
//      0 -> 1 -> 2 -> 3 -> 4
// 2. per la seconda riga:
//      parto da i = 1 e pusho tutti i caratteri
//      che hanno indice dispari
// 3. per la terza riga:
//      parto da i = 2 e pusho tutti i caratteri
//      saltando al 4° indice
// stampo gli array in una stringa concatenata (usando una funzione)

function contatore(str) {
    let arr1 = []
    let arr2 = []
    let arr3 = []
    let res = []
    str = soloLettore(str) // applico la funzione per prendere solo le lettere

    for (let i = 0; i < str.length;) {
        const current = str[i]
        arr1.push(current)
        i += 4 // gli indici da saltare per formare la riga 1
    }

    for (let i = 1; i < str.length;) {
        const current = str[i]
        arr2.push(current)
        if (i % 2 == 1) { // se l'indice è dispari
            arr2.push(current)
            i += 2 // gli indici da saltare per formare la riga 2
        }
    }
    for (let i = 2; i < str.length;) {
        const current = str[i]
        arr3.push(current)
        i += 4 // gli indici da saltare per formare la riga 3
    }
    res.push(arr1, arr2, arr3)
    return arrayFinale(res) // applico la funzione per creare una stringa
}

function arrayFinale(arrDiArr) {
    let finalStr = ''
    for (let i = 0; i < arrDiArr.length; i++) { // ciclo sull'array esterno
        const current = arrDiArr[i];
        for (let k = 0; k < current.length; k++) { // ciclo sul singolo array
            const currentK = current[k];
            finalStr = finalStr + currentK // metto le letterre dell'array nella stringa
        }
    }
    return finalStr
}

function soloLettore(str) {
    let newStr = ''
    for (let i = 0; i < str.length; i++) {
        const current = str[i]
        if (current.match(/[a-z]/i)) { // espressione regolare:
            // prendo tutte le lettere comprese tra a e z (elemino spazi e punteggiatura)
            newStr += current.toUpperCase() // metto tutti i caratteri selezionati in una stringa
            // e li trasformo in maiuscolo
        }
    }
    return newStr
}

console.log(contatore('ci hanno scoperti, fuggiamo!'))