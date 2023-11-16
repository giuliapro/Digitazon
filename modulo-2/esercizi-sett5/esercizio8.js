// Scrivere una funzione che dato in ingresso un array di array contenente solo numeri,
// "appiattisca" la struttura dati ritornando un array di numeri


function appiattaArray(arrayDiarray) {
    let arrayAppiattito = []
    for (let i = 0; i < arrayDiarray.length; i++) {
        let arrayIntero = arrayDiarray[i];
        for (let j = 0; j < arrayIntero.length; j++) {
            arrayAppiattito.push(arrayIntero[j]);
        }
    }
    return arrayAppiattito
}

console.log(appiattaArray( [[1, 2, 3], [4, 5, 6], [7, 8, 9]]))