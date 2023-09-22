const {
    legalPawnMoves,
    legalTowerMoves,
    legalKnightMoves,
    legalBishopMoves
} = require('./chess.js')




// testiamo che il pedone si muova in modo corretto,
// lo scriviamo nel codice per catturare "su pietra" le sue leggi
// quando il codice AaaaaaaaaaaAAAAAAAAA

function testPawn() {
    let chessboardStart = [
        ['bT', 'bP', 'bP', '', '', '', 'nP', 'nT'], // blocked pawn
        ['bC', 'bP', '', '', '', '', 'nP', 'nC'],
        ['bA', 'bP', '', '', '', '', 'nP', 'nA'],
        ['bR', 'bP', '', '', '', '', 'nP', 'nR'],
        ['bRe', 'bP', '', '', '', '', 'nP', 'nRe'],
        ['bA', 'bP', 'nP', '', '', '', 'nP', 'nA'],
        ['bC', 'bP', '', '', '', '', 'nP', 'nC'], // pawn that eats
        ['bT', 'bP', 'nP', '', '', '', 'nP', 'nT'],
    ]
    // data chessboardStart, vogliamo assicurarci che il pedone
    // in [2,1] si possa muovere solo di 1 o 2 caselle in avanti

    function pawnShouldAdvanceCorrectly() {
        let moves = legalPawnMoves(chessboardStart, [2, 1])
        let expectedMoves = [[2, 2], [2, 3]]
        console.log(areEqual(moves, expectedMoves) ?
                "Ok" :
                "NOK!" + moves + " - " + expectedMoves) // operatore ternario
    }

    function pawnShouldNotAdvanceIfLocked() {
        let moves = legalPawnMoves(chessboardStart, [0, 1])
        let expectedMoves = []
        console.log(areEqual(moves, expectedMoves) ?
                "Ok" :
                "NOK!" + moves + " - " + expectedMoves) // operatore ternario
    }

    function pawnShouldAdvanceAndEat() {
        let moves = legalPawnMoves(chessboardStart, [6, 1])
        let expectedMoves = [[5,2], [7,2], [6,2], [6,3]]
        console.log(areEqual(moves, expectedMoves) ?
                "Ok" :
                "NOK!" + moves + " - " + expectedMoves) // operatore ternario
    }

    pawnShouldAdvanceCorrectly()
    pawnShouldNotAdvanceIfLocked()
    pawnShouldAdvanceAndEat()
}

testPawn()

// NB. per gli array NON si può utilizzare ==
function areEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false
    }
    for (let i = 0; i < arr1.length; i++) {
        let inner1 = arr1[i]
        let inner2 = arr2[i]
        if (inner1.length !== inner2.length) {
            return false
        }
        for (let j = 0; j < inner1; j++) {
            if (inner1[j] !== inner2[j]) {
                return false
            }
        }

    }
    return true
}