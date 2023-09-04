// dati 2 array, produrre un terzo array che abbia gli elementi
// che compaiono solamente in uno dei due
// (non quelli che compaiono in entrambi)
// usando il metodo indexOf() degli array

let arr1 = [1, 2, 3]
let arr2 = [3, 4, 5]

let arr3 = []

// iterando su arr1,
// qualsiasi elemento che non trovo in arr2,
// lo metto in arr3;
// iterando su arr2,
// qualsiasi elemento che non trovo in arr1,
// lo metto in arr3.

for (let i = 0; i < arr1.length; i++) { // per ogni elemento dell'arr1,
    let current = arr1[i] // salvo l'elemento puntato dall'indice
    let check1 = arr2.indexOf(current) // dentro l'arr2, in che posizione sta current?
    if (check1 == -1) { // se l'elemento non c'è,
        arr3.push(current) // pusho
    } // se c'è già, non pusho nulla
}

for (let i = 0; i < arr2.length; i++) {
    let current = arr2[i]
    let check2 = arr1.indexOf(current)
    if (check2 == -1) {
        arr3.push(current)
    }
}

console.log(arr3)