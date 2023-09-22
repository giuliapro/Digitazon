// scrivere una funzione che prende in ingresso due array a e b,
// la funzione deve ritornare un array che contenga gli elementi
// che sono solo in a e solo in b

function funcArr(a, b) {
    let c = [] // creo un terzo array in cui pushare gli elementi
    for (let i = 0; i < a.length; i++) { // per ogni elementi di a
        let current = a[i] // assegno il valore corrente ad una variabile
        let check1 = b.indexOf(current) // verifico se quel valore è presente in b
        if (check1 == -1) { // se non è presente,
            c.push(current) // lo pusho in c
        } // sennò non faccio nulla
    }
    for (let i = 0; i < b.length; i++) { // per ogni elementi di b
        let current = b[i] // assegno il valore corrente ad una variabile
        let check2 = a.indexOf(current) // verifico se quel valore è presente in a
        if (check2 == -1) { // se non è presente,
            c.push(current) // lo pusho in c
        } // sennò non faccio nulla
    }
    return c // ritorno c
}

console.log(funcArr([1, 2, 3, 4, 5], [1, 6, 2, 7, 8, 3]))