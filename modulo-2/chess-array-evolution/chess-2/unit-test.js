const {
  legalPawnMoves,
  legalTowerMoves,
  legalKnightMoves,
  legalBishopMoves,
  legalQueenMoves,
  legalKingMoves,
  canCastleLeft
} = require('./chess.js')

// non si puo' utilizzare == per gli array
// e no, nemmeno ===
function areEqual(o1, o2) {

  // guardia x escludere
  if (typeof o1 !== typeof o2) {
    return false
  }

  // nel caso dei booleani, x sapere se entrambe le variabili sono dei booleani
  if (typeof o1 === 'boolean') {
    return o1 === o2
  }

  if (o1.length !== o2.length) {
    return false
  }

  for (let i = 0; i < o1.length; i++) {
    let inner1 = o1[i]
    let inner2 = o2[i]
    if (inner1.length !== inner2.length) {
      return false
    }
    for (let j = 0; j < inner1.length; j++) {
      if (inner1[j] !== inner2[j]) {
        return false
      }
    }
  }

  return true
}


// funzione che riceve in ingresso un valore ricevuto e un valore atteso:
// se sono uguali,
//     stampa Ok
// se sono diversi,
//     stampa NOK! e i relativi valori

function areBooleanEqual(received, expected) {
  if (received === expected) {
    console.log('Ok')
  } else {
    console.log('NOK!' + 'received:' + received, 'expected:' + expected)
  }
}



// Testiamo che il pedone si muova in modo corretto, lo scriviamo
// nel codice per catturare "su pietra" le sue leggi
// Quando il codice sorgente cambia, allora per assicurarci che la
// feature sia rimasta inalterata nella sua semantica, ci basta
// eseguire il test! Niente. Piu'. Test. Manuali!!!


// PEDONE

function testPawn() {
  let chessboard = [
    ['bT', 'bP', 'bP', '', '', '', 'nP', 'nT'], // blocked pawn
    ['bC', 'bP', '', '', '', '', 'nP', 'nC'],
    ['bA', 'bP', '', '', '', '', 'nP', 'nA'],
    ['bR', 'bP', '', '', '', '', 'nP', 'nR'],
    ['bRe', 'bP', '', '', '', '', 'nP', 'nRe'],
    ['bA', 'bP', 'nP', '', '', '', 'nP', 'nA'],
    ['bC', 'bP', '', '', '', '', 'nP', 'nC'], // pawn that eats
    ['bT', 'bP', 'nP', '', '', '', 'nP', 'nT'],
  ]

  // data chessboardStart vogliamo assicurarci che il pedone in [2,1]
  // si possa muovere solo di una o due caselle in avanti
  function pawnShouldAvdanceCorrectly() {
    let moves = legalPawnMoves(chessboard, [2, 1])
    let expectedMoves = [[2, 2], [2, 3]]
    console.log(areEqual(moves, expectedMoves) ?
      "Ok" :
      "NOK! " + moves + " - " + expectedMoves)
  }

  function pawnShouldNotAdvanceIfBlocked() {
    let moves = legalPawnMoves(chessboard, [0, 1])
    let expectedMoves = []
    console.log(areEqual(moves, expectedMoves) ?
      "Ok" :
      "NOK! " + moves + " - " + expectedMoves)

  }

  function pawnShouldAdvanceAndEat() {
    let moves = legalPawnMoves(chessboard, [6, 1])
    let expectedMoves = [[5, 2], [7, 2], [6, 2], [6, 3]]
    console.log(areEqual(moves, expectedMoves) ?
      "Ok" :
      "NOK! " + moves + " - " + expectedMoves)
  }

  pawnShouldAvdanceCorrectly()
  pawnShouldNotAdvanceIfBlocked()
  pawnShouldAdvanceAndEat()
}

testPawn()



// ARROCCO

function testCastle() {
  let chessboardLeft = [
    ['bT', 'bP', '', '', '', '', 'nP', 'nT'],
    ['', 'bP', '', '', '', '', 'nP', 'nC'],
    ['', 'bP', '', '', '', '', 'nP', 'nA'],
    ['', 'bP', '', '', '', '', 'nP', 'nR'],
    ['bRe', 'bP', '', '', '', '', 'nP', 'nRe'],
    ['bA', 'bP', '', '', '', '', 'nP', 'nA'],
    ['bC', 'bP', '', '', '', '', 'nP', 'nC'],
    ['bT', 'bP', '', '', '', '', 'nP', 'nT'],
  ]

  let chessboardLeftNo = [
    ['bT', 'bP', '', '', '', '', 'nP', 'nT'],
    ['bC', 'bP', '', '', '', '', 'nP', 'nC'], // c'è un cavallo in mezzo
    ['', 'bP', '', '', '', '', 'nP', 'nA'],
    ['', 'bP', '', '', '', '', 'nP', 'nR'],
    ['bRe', 'bP', '', '', '', '', 'nP', 'nRe'],
    ['bA', 'bP', '', '', '', '', 'nP', 'nA'],
    ['bC', 'bP', '', '', '', '', 'nP', 'nC'],
    ['bT', 'bP', '', '', '', '', 'nP', 'nT'],
  ]

  let chessboardLeftNo2 = [
    ['', 'bP', '', '', '', '', 'nP', 'nT'],
    ['bT', 'bP', '', '', '', '', 'nP', 'nC'], // la torre è spostata
    ['', 'bP', '', '', '', '', 'nP', 'nA'],
    ['', 'bP', '', '', '', '', 'nP', 'nR'],
    ['bRe', 'bP', '', '', '', '', 'nP', 'nRe'],
    ['bA', 'bP', '', '', '', '', 'nP', 'nA'],
    ['bC', 'bP', '', '', '', '', 'nP', 'nC'],
    ['bT', 'bP', '', '', '', '', 'nP', 'nT'],
  ]

  let chessboardLeftNo3 = [
    ['bT', 'bP', '', '', '', '', 'nP', 'nT'],
    ['', 'bP', '', '', '', '', 'nP', 'nC'], 
    ['', 'bP', '', '', '', '', 'nP', 'nA'],
    ['bRe', 'bP', '', '', '', '', 'nP', 'nR'], // il re è spostato
    ['', 'bP', '', '', '', '', 'nP', 'nRe'],
    ['bA', 'bP', '', '', '', '', 'nP', 'nA'],
    ['bC', 'bP', '', '', '', '', 'nP', 'nC'],
    ['bT', 'bP', '', '', '', '', 'nP', 'nT'],
  ]

  let chessboardLeftNoMissingKing = [
    ['bT', 'bP', '', '', '', '', 'nP', 'nT'],
    ['', 'bP', '', '', '', '', 'nP', 'nC'], 
    ['', 'bP', '', '', '', '', 'nP', 'nA'],
    ['', 'bP', '', '', '', '', 'nP', 'nR'], 
    ['', 'bP', '', '', '', '', 'nP', 'nRe'], // il re non c'è
    ['bA', 'bP', '', '', '', '', 'nP', 'nA'],
    ['bC', 'bP', '', '', '', '', 'nP', 'nC'],
    ['bT', 'bP', '', '', '', '', 'nP', 'nT'],
  ]

  let chessboardLeftNoMissingTower = [
    ['', 'bP', '', '', '', '', 'nP', 'nT'], // la torre non c'è
    ['', 'bP', '', '', '', '', 'nP', 'nC'], 
    ['', 'bP', '', '', '', '', 'nP', 'nA'],
    ['', 'bP', '', '', '', '', 'nP', 'nR'], 
    ['bRe', 'bP', '', '', '', '', 'nP', 'nRe'], 
    ['bA', 'bP', '', '', '', '', 'nP', 'nA'],
    ['bC', 'bP', '', '', '', '', 'nP', 'nC'],
    ['bT', 'bP', '', '', '', '', 'nP', 'nT'],
  ]

  function shouldBeAbleToCastleLeft() {
    // dobbiamo utilizzare un booleano
    let can = canCastleLeft(chessboardLeft, [4,0], [0,0]) // non mi servono le coordinate
    // del re e della torre perché assumiamo che non si siano mai mossi
    let expected = true
    areBooleanEqual(can, expected) // mi aspetto che il risultato sia true

    can = canCastleLeft(chessboardLeftNo, [4,0], [0,0])
    expected = false
    areBooleanEqual(can, expected)

    can = canCastleLeft(chessboardLeftNo2, [4,0], [1,0])
    expected = false
    areBooleanEqual(can, expected)

    can = canCastleLeft(chessboardLeftNo3, [3,0], [0,0])
    expected = false
    areBooleanEqual(can, expected)

    can = canCastleLeft(chessboardLeftNoMissingKing, [0,2], [0,0]) // inventiamo la pos del re, perché se non ci fosse non potremmo giocare
    expected = false
    areBooleanEqual(can, expected)

    can = canCastleLeft(chessboardLeftNoMissingTower, [4,0], [0,2]) // inventiamo la pos della torre, pos casuale
    expected = false
    areBooleanEqual(can, expected)
  }

  shouldBeAbleToCastleLeft()

}

testCastle()