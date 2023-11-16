// scrivere una funzione che accetta due funzioni a e b
// queste due funzioni ritornano a loro volta dei numeri,
// non ne conoscete pero' l'implementazione,
// la vostra funziona deve ritornare "a"
// se il numero ritornato da a è maggiore di quello ritornano da b,
// "b" altrimenti

// creazione funzC con parametri funzA e funzB
// specificare funzA e funzB con implementazione a caso, tanto non serve
// dire in funzC di ritornare il numero maggiore

function funzA(n) {
    return n
}

function funzB(n) {
    return n
}

function funzC(a,b) {
    if (a > b) {
        return "a"
    } else {
        return "b"
    }
}

console.log(funzC(funzA(23), funzB(32))) // passo l'invocazione delle due funzioni a funzC

// invocazione
funzA(42) // 42

funzA // la funzione "in se" / stessa

console.log(funzC(funzA, funzB)) // passo le due funzioni a funzC

console.log(funzC(() => 42, () => 43))