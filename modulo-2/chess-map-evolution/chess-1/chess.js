let chessboard = {
    'a8': 'nT', 'b8': 'nC', 'c8': 'nA', 'd8': 'nR', 'e8': 'nRe', 'f8': 'nA', 'g8': 'nC', 'h8': 'nT',
    'a7': 'nP', 'b7': 'nP', 'c7': 'nP', 'd7': 'nP', 'e7': 'nP', 'f7': 'nP', 'g7':'nP', 'h7': 'nP',
    'a6': '', 'b6': '', 'c6': '', 'd6': '', 'e6': '', 'f6': '', 'g6': '', 'h6': '',
    'a5': '', 'b5': '', 'c5': '', 'd5': '', 'e5': '', 'f5': '', 'g5': '', 'h5': '',
    'a4': '', 'b4': '', 'c4': '', 'd4': '', 'e4': '', 'f4': '', 'g4': '', 'h4': '',
    'a3': '', 'b3': '', 'c3': '', 'd3': '', 'e3': '', 'f3': '', 'g3': '', 'h3': '',
    'a2': 'bP', 'b2': 'bP', 'c2': 'bP', 'd2': 'bP', 'e2': 'bP', 'f2': 'bP', 'g2':'bP', 'h2': 'bP',
    'a1': 'bT', 'b1': 'bC', 'c1': 'bA', 'd1': 'bR', 'e1': 'bRe', 'f1': 'bA', 'g1': 'bC', 'h1': 'bT'
}


// ad esempio dato a1 e dato il movimento in alto,
// qual è il risultato?
function moveUp(pos) {
    // dividere la stringa in 2 parti (2 variabili, sx e dx)
    // prendere il numero della chiave (dx)
    // convertire la stringa in numero
    // aggiungere 1
    let sx = pos[0]
    let dx = pos[1]
    // usare la funzione Number() per convertire la stringa in un numero
    dx = Number(dx) + 1
    return sx + dx
}

function moveDown(pos) {
    let sx = pos[0]
    let dx = pos[1]
    dx = Number(dx) - 1
    return sx + dx
}

function moveRight(pos) {
    // dividere la stringa in 2 parti (2 variabili, sx e dx)
    // prendere la lettera della chiave (sx)
    // dato un alfabeto, cambiare la lettera in quella succesiva
    let sx = pos[0]
    let dx = pos[1]
    let alfabeto = 'abcdefgh'
    for (let i = 0; i < alfabeto.length; i++) {
        if (sx == alfabeto[i]) {
            return alfabeto[i + 1] + dx
        }
    }
}

function moveLeft(pos) {
    // dividere la stringa in 2 parti (2 variabili, sx e dx)
    // prendere la lettera della chiave (sx)
    // dato un alfabeto, cambiare la lettera in quella precedente
    let sx = pos[0]
    let dx = pos[1]
    let alfabeto = 'abcdefgh'
    for (let i = 7; i < alfabeto.length; i--) {
        if (sx == alfabeto[i]) {
            return alfabeto[i - 1] + dx
        }
    }
}

console.log(moveUp('a1'))
console.log(moveDown('a8'))
console.log(moveRight('e8'))
console.log(moveLeft('b8'))


// obiettivo: far muovere il pedone secondo le sue regole
// * avanti di 1
// * avanti di 2 se alla riga di partenza
// * diagonale di 1 a sx se lì c'è un nemico
// * diagonale di 1 a dx se lì c'è un nemico
// * promozione

function legalPawnMoves() {

}
