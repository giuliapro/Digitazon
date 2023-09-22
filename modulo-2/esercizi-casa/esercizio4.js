// scrivere una funzione che data una stringa in ingresso
// ritorna solo i caratteri che al piu' compaiono una volta
// (ritornare solo i caratteri che non sono duplicati)

function func(str) {
    let str2 = [] // creo un array vuoto
    for (let i = 0; i < str.length; i++) { // per ogni occorrenza di str
        let current = str[i] // creo una variabile col valore corrente
        let check1 = str2.indexOf(current) // e una variabile per verificare se quel valore è presente nel mio array
        if (check1 == -1) { // se non è presente,
            str2.push(current) // lo pusho
        } else { // se è presente,
            str2.shift(current) // lo tolgo
        }
    }
    return str2 // ritorno l'array
}

console.log(func("abcdefgabc"))