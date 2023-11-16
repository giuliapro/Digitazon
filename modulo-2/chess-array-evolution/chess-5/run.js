//il bianco muove per primo
//prendiamo tutti i pezzi bianchi
//per ogni pezzo escludiamo quelli che non hanno mosse
//dei pezzi rimasti prendiamo uno casuale e ci facciamo dare le sue mosse legali
//e prendiamo un mossa a caso e aggiorniamo la chessboard
//passiamo il turno e si torna alla riga 2 col colore opposto
const {
    getPiecesByColor,
    getLegalMoves,
    updateChessboard,
    printBetterChessboard
} = require('./chess.js')

let chessboard = [
    ['bT', 'bP', '', '', '', '', 'nP', 'nT'],
    ['bC', 'bP', '', '', '', '', 'nP', 'nC'],
    ['bA', 'bP', '', '', '', '', 'nP', 'nA'],
    ['bR', 'bP', '', '', '', '', 'nP', 'nR'],
    ['bRe', 'bP', '', '', '', '', 'nP', 'nRe'],
    ['bA', 'bP', '', '', '', '', 'nP', 'nA'],
    ['bC', 'bP', '', '', '', '', 'nP', 'nC'],
    ['bT', 'bP', '', '', '', '', 'nP', 'nT'],
]

function turno(chessboard, color) {
    let coorPezzi = getPiecesByColor(chessboard, color)
    let pezziConMosse = []
    for (let i = 0; i < coorPezzi.length; i++) {
        const coorPezzo = coorPezzi[i];
        let mosse = getLegalMoves(chessboard, coorPezzo)
        if (mosse.length !== 0) {
            pezziConMosse.push(coorPezzo)
        }
    }
    let coorPezzoCasuale = randomElement(pezziConMosse)
    let mossePezzoCasuale = getLegalMoves(chessboard, coorPezzoCasuale)
    let coorMossaCasuale = randomElement(mossePezzoCasuale)
    return updateChessboard(chessboard, coorPezzoCasuale, coorMossaCasuale)
}

function randomElement(array){
    return array[Math.floor((Math.random()*array.length))]
}

function playGame(chessboard) {
    let color = 'b'
    for (let i = 0; i < 10; i++) { 
        if (i % 2 === 0) {
            color = 'b'
        } else {
            color = 'n'
        }
        chessboard = turno(chessboard, color)
        printBetterChessboard(chessboard)
        console.log('**********')
    }
}


playGame(chessboard)
