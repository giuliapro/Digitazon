// esercizio ordinali e naturali
// ordinale: insieme ben ordinato di tutti gli ordinali più piccoli di esso
// naturali: esempio di ordinali che possono essere denotati come:
// 0 = {} = {}
// 1 = {0} = {{}}
// 2 = {0, 1} = {{}, {{}}}
// 3 = {0, 1, 2} = {{}, {{}}, {{}, {{}}} }
// n: sequenza dei denotati dei numeri tra 0 e n-1 (seperati da , e racchiusi tra {})

// scrivere una funzione che dato n come parametro, ritorni il denotato

// parto nel dirgli che
// se n === 0,
//      allora ritorno solo {}
// altrimenti,
//      mi creo un array
//      ciclo per ogni numero inferiore a n
//          pusho nell'array il numero corrente, sul quale applico la funzione
//      ritorno il risultato in {} e uso il metodo join() per trasfomare
//      gli elementi dell'array in una stringa separati da ,

function denotato(n) {
    if (n === 0) {
        return '{}'
    } else {
        let numeri = []
        for (let i = 0; i < n; i++) {
            numeri.push(denotato(i)) // applico la funzione in modo ricorsivo
        }
        return '{' + numeri .join(', ') + '}'
    }
}

console.log(denotato(0))
console.log(denotato(1))
console.log(denotato(2))
console.log(denotato(3))
console.log(denotato(4))