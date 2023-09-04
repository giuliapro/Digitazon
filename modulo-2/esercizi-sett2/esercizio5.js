// dato un array togliere tutti i duplicati in un altro array

let arr1 = [1, 2, 3, 3, 4, 4, 5, 6, 6, 7, 5]

let arr2 = []

// iniziare il ciclo sugli elementi di arr1:
// se i valori non sono presenti in arr2,
// li inserisco in arr2

for (let i = 0; i < arr1.length; i++) { // per ogni elemento dell'arr1,
    let current = arr1[i] // salvo l'elemento puntato dall'indice
    let check1 = arr2.indexOf(current) // dentro l'arr2, in che posizione sta current?
    if (check1 == -1) { // se l'elemento non c'è,
        arr2.push(current) // pusho
    } // se c'è già, non pusho nulla
}

console.log(arr2)