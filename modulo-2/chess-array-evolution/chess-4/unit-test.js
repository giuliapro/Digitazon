const {
  legalPawnMoves,
  legalTowerMoves,
  legalKnightMoves,
  legalBishopMoves,
  legalQueenMoves,
  legalKingMoves,
  canCastle
} = require('./chess.js')

// non si puo' utilizzare == per gli array
// e no, nemmeno ===
function areEqual(o1, o2) {
  if (typeof o1 !== typeof o2) {
    return false
  }

  // nel caso dei booleani
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

// funzione che riceve in ingresso un "valore ricevuto" e un "valore atteso"
// se sono uguali
//     stampa Ok
// se sono diversi
//     stampa NOK! e i relativi valori
function areBooleanEqual(received, expected) {
  if (received === expected) {
    console.log('Ok')
  } else {
    console.log('NOK! ', 'received ' + received, 'expected ' + expected)
  }
}

// Testiamo che il pedone si muova in modo corretto, lo scriviamo
// nel codice per catturare "su pietra" le sue leggi
// Quando il codice sorgente cambia, allora per assicurarci che la
// feature sia rimasta inalterata nella sua semantica, ci basta
// eseguire il test! Niente. Piu'. Test. Manuali!!!

function testPawn() {
  let chessboard = [
    ['bT', 'bP', 'bP', '', '', '', 'nP', 'nT'], // blocked pawn
    ['bC', 'bP', '', 'nP', '', '', 'nP', 'nC'],
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

  function pawnShouldNotAdvanceIfBlocked2() {
    let moves = legalPawnMoves(chessboard, [1, 1])
    let expectedMoves = [[1, 2]]
    console.log(areEqual(moves, expectedMoves) ?
      "Ok" :
      "NOK! " + moves + " - " + expectedMoves)
  }

  pawnShouldAvdanceCorrectly()
  pawnShouldNotAdvanceIfBlocked()
  pawnShouldAdvanceAndEat()
  pawnShouldNotAdvanceIfBlocked2()
}

//testPawn()

function testTower() {
  let chessboard = [
    ['bT', '', '', '', '', '', 'nP', 'nT'], 
    ['bC', 'bP', '', '', '', '', 'nP', 'nC'],
    ['bA', 'bP', '', '', '', '', 'nP', 'nA'],
    ['bR', 'bP', '', '', '', '', 'nP', 'nR'],
    ['bRe', 'bP', '', '', '', '', 'nP', 'nRe'],
    ['', 'bP', '', '', '', '', 'nP', 'nA'],
    ['', 'bP', '', '', '', '', 'nP', 'nC'],
    ['bT', '', '', 'bP', '', '', 'nP', 'nT'],
  ]

  function towerEat() {
    let moves = legalTowerMoves(chessboard, [0, 0])
    let expectedMoves = [[0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6]]
    console.log(areEqual(moves, expectedMoves) ?
      "Ok" :
      "NOK! " + moves + " - " + expectedMoves)
  }

  function towerBlocked() {
    let moves = legalTowerMoves(chessboard, [7, 0])
    let expectedMoves = [[6, 0], [5, 0], [7, 1], [7, 2]]
    console.log(areEqual(moves, expectedMoves) ?
      "Ok" :
      "NOK! " + moves + " - " + expectedMoves)
  }

  towerEat()
  towerBlocked()
}
//testTower()

function testBishop() {
  let chessboard = [
    ['bT', 'bP', '', '', '', 'nP', '', 'nT'],
    ['bC', 'bP', '', '', '', '', 'nP', 'nC'],
    ['bA', 'bP', '', '', '', '', 'nP', 'nA'],
    ['bR', 'bP', '', '', '', '', 'nP', 'nR'],
    ['bRe', '', '', '', '', '', 'nP', 'nRe'],
    ['bA', 'bP', '', '', '', '', 'nP', 'nA'],
    ['bC', '', '', '', '', '', '', 'nC'],
    ['bT', 'bP', 'bP', '', '', '', 'nP', 'nT'],
  ]
  function testBishopE() {
    let moves = legalBishopMoves(chessboard, [5, 0])
    let expectedMoves = [[4,1], [3,2], [2,3], [1,4], [0,5], [6,1]]
    console.log(areEqual(moves, expectedMoves) ?
      "Ok" :
      "NOK! " + moves + " - " + expectedMoves)
  }
  function testBishopN() {
    let moves = legalBishopMoves(chessboard, [5, 7])
    let expectedMoves = [[6,6], [7,5]]
    console.log(areEqual(moves, expectedMoves) ?
      "Ok" :
      "NOK! " + moves + " - " + expectedMoves)
  }
  testBishopE()
  testBishopN()
}
//testBishop()

function testKnight () {
  let chessboard = [
    ['bT', 'bP', '', '', '', '', 'nP', 'nT'],
    ['bC', 'bP', '', '', '', '', 'nP', 'nC'],
    ['bA', 'bP', '', '', '', '', 'nP', 'nA'],
    ['bR', 'bP', '', '', '', '', 'nP', 'nR'],
    ['bRe', '', 'bP', '', '', '', 'nP', 'nRe'],
    ['bA', 'bP', '', '', 'bC', '', 'nP', 'nA'],
    ['bC', 'bP', '', '', '', '', 'nP', 'nC'],
    ['bT', 'bP', '', '', '', '', 'nP', 'nT'],
  ]
  function testKnightE () {
    let moves = legalBishopMoves(chessboard, [5, 4])
    let expectedMoves = [[4,5], [3,6], [6,5], [7,6], [6,3], [7,2], [4,3], [3,2]]
    console.log(areEqual(moves, expectedMoves) ?
      "Ok" :
      "NOK! " + moves + " - " + expectedMoves)
  }
  testKnightE ()
}
testKnight ()



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
    ['bC', 'bP', '', '', '', '', 'nP', 'nC'],
    ['', 'bP', '', '', '', '', 'nP', 'nA'],
    ['', 'bP', '', '', '', '', 'nP', 'nR'],
    ['bRe', 'bP', '', '', '', '', 'nP', 'nRe'],
    ['bA', 'bP', '', '', '', '', 'nP', 'nA'],
    ['bC', 'bP', '', '', '', '', 'nP', 'nC'],
    ['bT', 'bP', '', '', '', '', 'nP', 'nT'],
  ]
  let chessboardLeftNo2 = [
    ['', 'bP', '', '', '', '', 'nP', 'nT'],
    ['bT', 'bP', '', '', '', '', 'nP', 'nC'],
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
    ['bRe', 'bP', '', '', '', '', 'nP', 'nR'],
    ['', 'bP', '', '', '', '', 'nP', 'nRe'],
    ['bA', 'bP', '', '', '', '', 'nP', 'nA'],
    ['bC', 'bP', '', '', '', '', 'nP', 'nC'],
    ['bT', 'bP', '', '', '', '', 'nP', 'nT'],
  ]
  let chessboardLeftNoMissingKing = [
    ['bT', 'bP', 'bRe', '', '', '', 'nP', 'nT'],
    ['', 'bP', '', '', '', '', 'nP', 'nC'],
    ['', 'bP', '', '', '', '', 'nP', 'nA'],
    ['', 'bP', '', '', '', '', 'nP', 'nR'],
    ['', 'bP', '', '', '', '', 'nP', 'nRe'],
    ['bA', 'bP', '', '', '', '', 'nP', 'nA'],
    ['bC', 'bP', '', '', '', '', 'nP', 'nC'],
    ['bT', 'bP', '', '', '', '', 'nP', 'nT'],
  ]
  let chessboardLeftNoMissingTower = [
    ['', 'bP', 'bT', '', '', '', 'nP', 'nT'],
    ['', 'bP', '', '', '', '', 'nP', 'nC'],
    ['', 'bP', '', '', '', '', 'nP', 'nA'],
    ['', 'bP', '', '', '', '', 'nP', 'nR'],
    ['bRe', 'bP', '', '', '', '', 'nP', 'nRe'],
    ['bA', 'bP', '', '', '', '', 'nP', 'nA'],
    ['bC', 'bP', '', '', '', '', 'nP', 'nC'],
    ['bT', 'bP', '', '', '', '', 'nP', 'nT'],
  ]

  // mancano i test per il nero
  // function shouldBeAbleToCastleLeft() {

  //   let can = canCastle(chessboardLeft, 'b')
  //   let expected = true
  //   areBooleanEqual(can, expected)

  //   can = canCastle(chessboardLeftNo, 'b')
  //   expected = false
  //   areBooleanEqual(can, expected)

  //   can = canCastle(chessboardLeftNo2, 'b')
  //   expected = false
  //   areBooleanEqual(can, expected)

  //   can = canCastle(chessboardLeftNo3, 'b')
  //   expected = false
  //   areBooleanEqual(can, expected)

  //   can = canCastle(chessboardLeftNoMissingKing, 'b')
  //   expected = false
  //   areBooleanEqual(can, expected)

  //   can = canCastle(chessboardLeftNoMissingTower, 'b')
  //   expected = false
  //   areBooleanEqual(can, expected)
  // }

  // shouldBeAbleToCastleLeft()
}

testCastle()
