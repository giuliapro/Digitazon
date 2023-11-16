// il bianco muove per primo
// prendiamo tutti i pezzi che sono bianchi
// per ognuno di questi pezzi,
// escludiamo quelli che non hanno mosse legali
// dei pezzi rimanenti,
// ne prendiamo uno casuale e ci facciamo dare le sue mosse legali
// e prendiamo una mossa a caso
// passiamo all'altro colore e, invertendolo, torniamo alla riga 2

const {
    getPiecesByColor,
    getLegalMove
} = require('/chess.js')


let chessboard = [
    ['bT',  'bP', '', '', '', '', 'nP', 'nT'],
    ['bC',  'bP', '', '', '', '', 'nP', 'nC'],
    ['bA',  'bP', '', '', '', '', 'nP', 'nA'],
    ['bR',  'bP', '', '', '', '', 'nP', 'nR'], // 3
    ['bRe', 'bP', '', '', '', '', 'nP', 'nRe'],
    ['bA',  'bP', '', '', '', '', 'nP', 'nA'],
    ['bC',  'bP', '', '', '', '', 'nP', 'nC'],
    ['bT',  'bP', '', '', '', '', 'nP', 'nT'],
  ]

function turno(chessboard, color) {
    // saltiamo il primo passaggio perché abbiamo astratto il concetto di color
    let coorPezzi = getPiecesByColor(chessboard, color)
    let pezziConMosse = []
    for (let i = 0; i < coorPezzi.length; i++) {
        let coorPezzo = coorPezzi[i]
        // per ogni pezzo, dobbiamo farci dare le sue mosse
        let mosse = getLegalMove(chessboard, coorPezzo)
        if (mosse.length !== 0 ) { // se l'array NON è vuoto (ci sono mosse legali)
            pezziConMosse.push(coorPezzo)
        }
    }
}