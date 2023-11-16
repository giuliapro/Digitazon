const {
  legalPawnMoves,
  legalTowerMoves,
  legalKnightMoves,
  legalQueenMoves,
  legalBishopMoves,
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

// testPawn()

// TORRE: solo verticale orizzontale 
// torre in mezzo e ha tutto libero
// quando è bloccata da un cavallo bianco
// quando mangia un pezzo e quindi non avanza più

function testTower() {
  let chessboard = [
    ['bT', 'bP', '', '', '', '', 'nP', 'nT'],
    ['bC', 'bP', '', '', '', '', 'nP', 'nC'],
    ['bA', 'bP', '', '', '', '', 'nP', 'nA'],
    ['bR', 'bP', '', '', '', '', 'nP', 'nR'],
    ['', '', '', '', 'bT', '', '', ''], // 4,4
    ['bA', 'bP', '', '', '', '', 'nP', 'nA'],
    ['bC', 'bP', '', '', '', '', 'nP', 'nC'],
    ['bT', 'bP', '', '', '', '', 'nP', 'nT'],
  ]

  let chessboardBlocked = [
    ['bT', 'bP', '', '', '', '', 'nP', 'nT'],
    ['bC', 'bP', '', '', '', '', 'nP', 'nC'],
    ['bA', 'bP', '', 'bT', 'bC', '', 'nP', 'nA'],
    ['bR', 'bP', '', '', '', '', 'nP', 'nR'],
    ['bRe', 'bP', '', '', '', '', 'nP', 'nRe'], // 4
    ['bA', 'bP', '', '', '', '', 'nP', 'nA'],
    ['bC', 'bP', '', '', '', '', 'nP', 'nC'],
    ['bT', 'bP', '', '', '', '', 'nP', 'nT'],
  ]

  let chessboardEat = [
    ['bT', 'bP', '', '', '', '', 'nP', 'nT'],
    ['bC', 'bP', '', '', '', '', 'nP', 'nC'],
    ['bA', 'bP', '', 'bT', 'nC', '', 'nP', 'nA'],
    ['bR', 'bP', '', '', '', '', 'nP', 'nR'],
    ['bRe', 'bP', '', '', '', '', 'nP', 'nRe'], // 4
    ['bA', 'bP', '', '', '', '', 'nP', 'nA'],
    ['bC', 'bP', '', '', '', '', 'nP', 'nC'],
    ['bT', 'bP', '', '', '', '', 'nP', 'nT'],
  ]

  function towerShouldAdvanceCorrectly() {
    let moves = legalTowerMoves(chessboard, [4, 4])
    let expectedMoves = [[3, 4], [2, 4], [1, 4], [0, 4], [4, 5], [4, 6], [4, 7],
    [5, 4], [6, 4], [7, 4], [4, 3], [4, 2], [4, 1], [4, 0]]
    console.log(areEqual(moves, expectedMoves) ?
      "Ok" :
      "NOK! " + moves + " - " + expectedMoves)
  }

  function towerBlocked() {
    let moves = legalTowerMoves(chessboardBlocked, [2, 3])
    let expectedMoves = [[1, 3], [0, 3], [3, 3], [4, 3], [5, 3], [6, 3], [7, 3], [2, 2]]
    console.log(areEqual(moves, expectedMoves) ?
      "Ok" :
      "NOK! " + moves + " - " + expectedMoves)
  }

  function towerShouldAdvanceAndEat() {
    let moves = legalTowerMoves(chessboardEat, [2, 3])
    let expectedMoves = [[1, 3], [0, 3], [3, 3], [4, 3], [5, 3], [6, 3], [7, 3], [2, 2]]
    console.log(areEqual(moves, expectedMoves) ?
      "Ok" :
      "NOK! " + moves + " - " + expectedMoves)
  }

  towerShouldAdvanceCorrectly()
  towerBlocked()
  towerShouldAdvanceAndEat()
}

// testTower()







// ALFIERE: solo diagonale

function testBishop() {
  let chessboard = [
    ['bT', 'bP', '', '', '', '', 'nP', 'nT'],
    ['bC', 'bP', '', '', '', '', 'nP', 'nC'],
    ['bA', 'bP', '', '', '', '', 'nP', 'nA'],
    ['bR', 'bP', '', '', 'bA', '', 'nP', 'nR'],
    ['bRe', 'bP', '', '', '', '', 'nP', 'nRe'], // 4
    ['bA', 'bP', '', '', '', '', 'nP', 'nA'],
    ['bC', 'bP', '', '', '', '', 'nP', 'nC'],
    ['bT', 'bP', '', '', '', '', 'nP', 'nT'],
  ]

  let chessboardBlocked = [
    ['bT', 'bP', '', '', '', '', 'nP', 'nT'],
    ['bC', 'bP', '', '', 'bC', '', 'nP', 'nC'],
    ['bA', 'bP', '', 'bA', '', '', 'nP', 'nA'],
    ['bR', 'bP', 'bC', '', '', '', 'nP', 'nR'],
    ['bRe', 'bP', '', '', '', '', 'nP', 'nRe'], // 4
    ['bA', 'bP', '', '', '', '', 'nP', 'nA'],
    ['bC', 'bP', '', '', '', '', 'nP', 'nC'],
    ['bT', 'bP', '', '', '', '', 'nP', 'nT'],
  ]

  let chessboardEat = [
    ['bT', 'bP', '', '', '', '', 'nP', 'nT'],
    ['bC', 'bP', '', '', '', '', 'nP', 'nC'],
    ['bA', 'bP', '', 'bA', '', '', 'nP', 'nA'],
    ['bR', 'bP', '', '', 'nC', '', 'nP', 'nR'],
    ['bRe', 'bP', '', '', '', '', 'nP', 'nRe'], // 4
    ['bA', 'bP', '', '', '', '', 'nP', 'nA'],
    ['bC', 'bP', '', '', '', '', 'nP', 'nC'],
    ['bT', 'bP', '', '', '', '', 'nP', 'nT'],
  ]

  function bishopShouldAdvanceCorrectly() {
    let moves = legalBishopMoves(chessboard, [3, 4])
    let expectedMoves = [[2, 5], [1, 6], [4, 5], [5, 6], [4, 3], [5, 2], [2, 3], [1, 2]]
    console.log(areEqual(moves, expectedMoves) ?
      "Ok" :
      "NOK! " + moves + " - " + expectedMoves)
  }

  function bishopBlocked() {
    let moves = legalBishopMoves(chessboardBlocked, [2, 3])
    let expectedMoves = [[3, 4], [4, 5], [5, 6], [1, 2]]
    console.log(areEqual(moves, expectedMoves) ?
      "Ok" :
      "NOK! " + moves + " - " + expectedMoves)
  }

  function bishopShouldAdvanceAndEat() {
    let moves = legalBishopMoves(chessboardEat, [2, 3])
    let expectedMoves = [[1, 4], [0, 5], [3, 4], [3, 2], [1, 2]]
    console.log(areEqual(moves, expectedMoves) ?
      "Ok" :
      "NOK! " + moves + " - " + expectedMoves)
  }

  bishopShouldAdvanceCorrectly()
  bishopBlocked()
  bishopShouldAdvanceAndEat()
}

// testBishop()






// REGINA: sia diagonale sia verticale e orizzonatale

function testQueen() {
  let chessboard = [
    ['bT', '', '', '', '', '', 'nP', ''],
    ['bC', 'bP', '', '', '', '', '', 'nC'],
    ['bA', 'bP', '', '', '', '', 'nP', 'nA'],
    ['', '', '', '', 'bR', '', '', ''],
    ['bRe', 'bP', '', '', '', '', 'nP', 'nRe'], // 4
    ['bA', 'bP', '', '', '', '', 'nP', 'nA'],
    ['bC', '', '', '', '', '', 'nP', 'nC'],
    ['bT', '', '', '', '', '', 'nP', 'nT'],
  ]

  let chessboardBlocked = [
    ['bT', 'bP', '', '', '', '', 'nP', 'nT'],
    ['bC', 'bP', '', '', 'bC', '', 'nP', 'nC'],
    ['bA', 'bP', '', 'bR', '', '', 'nP', 'nA'],
    ['bR', 'bP', 'bC', '', '', '', 'nP', 'nR'],
    ['bRe', 'bP', '', '', '', '', 'nP', 'nRe'], // 4
    ['bA', 'bP', '', '', '', '', 'nP', 'nA'],
    ['bC', 'bP', '', '', '', '', 'nP', 'nC'],
    ['bT', 'bP', '', '', '', '', 'nP', 'nT'],
  ]

  let chessboardEat = [
    ['bT', 'bP', '', '', '', '', 'nP', 'nT'],
    ['bC', 'bP', '', '', '', '', 'nP', 'nC'],
    ['bA', 'bP', '', 'bR', '', '', 'nP', 'nA'],
    ['bR', 'bP', '', '', 'nC', '', 'nP', 'nR'],
    ['bRe', 'bP', '', '', '', '', 'nP', 'nRe'], // 4
    ['bA', 'bP', '', '', '', '', 'nP', 'nA'],
    ['bC', 'bP', '', '', '', '', 'nP', 'nC'],
    ['bT', 'bP', '', '', '', '', 'nP', 'nT'],
  ]

  function queenShouldAdvanceCorrectly() {
    let moves = legalQueenMoves(chessboard, [3, 4])
    let expectedMoves = [[2, 4], [1, 4], [0, 4], [3, 5], [3, 6], [3, 7], [4, 4], [5, 4], [6, 4], [7, 4],
    [3, 3], [3, 2], [3, 1], [3, 0], [2, 5], [1, 6], [0, 7], [4, 5], [5, 6], [4, 3], [5, 2], [6, 1], [2, 3], [1, 2], [0, 1]]
    console.log(areEqual(moves, expectedMoves) ?
      "Ok" :
      "NOK! " + moves + " - " + expectedMoves)
  }

  function queenBlocked() {
    let moves = legalQueenMoves(chessboardBlocked, [2, 3])
    let expectedMoves = [[1,3],[0,3],[2,4],[2,5],[2,6],[3,3],[4,3],[5,3],[6,3],[7,3],[2,2],[3,4],[4,5],[5,6],[1,2]]
    console.log(areEqual(moves, expectedMoves) ?
      "Ok" :
      "NOK! " + moves + " - " + expectedMoves)
  }

  function queenShouldAdvanceAndEat() {
    let moves = legalQueenMoves(chessboardEat, [2, 3])
    let expectedMoves = [[1,3],[0,3],[2,4],[2,5],[2,6],[3,3],[4,3],[5,3],[6,3],[7,3],[2,2],[1,4],[0,5],[3,4],[3,2],[1,2]]
    console.log(areEqual(moves, expectedMoves) ?
      "Ok" :
      "NOK! " + moves + " - " + expectedMoves)
  }

  queenShouldAdvanceCorrectly()
  queenBlocked()
  queenShouldAdvanceAndEat()
}

testQueen()





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
  function shouldBeAbleToCastleLeft() {

    let can = canCastle(chessboardLeft, 'b')
    let expected = true
    areBooleanEqual(can, expected)

    can = canCastle(chessboardLeftNo, 'b')
    expected = false
    areBooleanEqual(can, expected)

    can = canCastle(chessboardLeftNo2, 'b')
    expected = false
    areBooleanEqual(can, expected)

    can = canCastle(chessboardLeftNo3, 'b')
    expected = false
    areBooleanEqual(can, expected)

    can = canCastle(chessboardLeftNoMissingKing, 'b')
    expected = false
    areBooleanEqual(can, expected)

    can = canCastle(chessboardLeftNoMissingTower, 'b')
    expected = false
    areBooleanEqual(can, expected)
  }

  shouldBeAbleToCastleLeft()
}

// testCastle()
