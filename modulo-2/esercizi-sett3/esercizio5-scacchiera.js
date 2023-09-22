// approccio array

// il pezzo in posizione A2 puo' andare in posizione A3?

// movePawn assume che i suoi parametri siano gia' stati tradotti dal
// linguaggio scacchistico?
// Se si, perche'?

// assumiamo di avere dentro start la coordinata in numeri della posizione
// perche':
// * vogliamo tenere la difficolta' bassa
// * vogliamo che la funzione faccia una ed una sola "cosa"

function legalPawnMoves(start) {
    // alla posizione start c'e' un pedone? Perche' se non c'e', c'e' un problema

    // da qui effettivamente alla pos start c'e' un pedone
    // nella prossima posizione legale per il pedone, c'e' qualcuno?
    //

    // ad esempio se io avessi 0,2
    // la posizione legale per il pedone e' 0,3
    let x = start[0]
    let y = start[1]

    let legalMoves = []


    if (!isOutOfTheChessboard(x - 1, y + 1)) {
        let possibleEnemy = chessboard[x - 1][y + 1]
        if (possibleEnemy != '' && isEnemy(chessboard[x][y], possibleEnemy)) {
            legalMoves.push([x - 1, y + 1])
        }
    }

    if (!isOutOfTheChessboard(x + 1, y + 1)) {
        possibleEnemy = chessboard[x + 1][y + 1]
        if (possibleEnemy != '' && isEnemy(chessboard[x][y], possibleEnemy)) {
            legalMoves.push([x + 1, y + 1])
        }
    }

    // possibili opportunita'
    // []
    // [sx]
    // [dx]
    // [sx, dx]

    // TODO promozione del pedone

    // se il pedone ha un ostacolo davanti non si puo' muovere in avanti
    if (chessboard[x][y + 1] !== '') {
        return legalMoves
    }

    // se il pedone e' alla posizione di partenza
    if (start[1] == 1 && chessboard[x][y + 2] !== '') {
        legalMoves.push([start[0], start[1] + 1])
        legalMoves.push([start[0], start[1] + 2])
        return legalMoves
    }

    legalMoves.push([start[0], start[1] + 1])
    return legalMoves
}

function legalTowerMoves(start) {
    // l'algoritmo sottostante va ripetuto per tutte le direzioni

    // scelgo una direzione in cui muovermi
    // creo un array vuoto di mosse legali
    // fino a che non sono arrivato al bordo
    //     se nella casella attuale è vuota
    //         la aggiungo alle mosse legali
    //     se nella casella attuale c'e' un nemico
    //         la aggiungo alle mosse legali, ed ho finito
    //     se nella casella attuale c'e' un amico
    //         ho finito

    function checkDirection(move) {
        let legalMoves = [] // creo un array vuoto di mosse legali
        let x, y

        [x, y] = move(start[0], start[1]) // destructuring

        while (!isOutOfTheChessboard(x, y)) { // fino a che non sono arrivato al bordo della tastiera
            if (isEmpty(x, y)) { // se la casella attuale è vuota
                legalMoves.push([x, y]) // la aggiungo alle mosse legali;
            } else if (isEnemyAtPos(start, [x, y])) { // se nella casella attuale c'è un nemico
                legalMoves.push([x, y]) // la aggiungo alle mosse legali;
                return legalMoves // ho finito
            } else { // se nella casella attuale c'è un amico (basta else perché non ci sono altri casi)
                return legalMoves // ho finito
            }

            [x, y] = move(x, y) // destructuring
        }
        return legalMoves
    }

    let legalMoves = []
    let moves = [/*moveLeft, moveUp,*/ moveRight/*, moveDown*/] // variabile con le funzioni che mi fanno muovere
    for (let i = 0; i < moves.length; i++) { // per ogni mossa nelle 4 direzioni
        let move = moves[i] // prendo la mossa corrente (?)
        let legalMovesForDirection = checkDirection(move) // creo variabile con le nuove mosse nelle 4 direzioni possibili
        legalMoves = legalMoves.concat(legalMovesForDirection) // aggiungo le mosse alle mosse legali
    }

    return legalMoves
}


// funzione per muoversi a sinistra
function moveLeft(x, y) {
    return [x - 1, y]
}

// funzione per muoversi verso l'alto
function moveUp(x, y) {
    return [x, y + 1]
}

// funzione per muoversi a destra
function moveRight(x, y) {
    return [x + 1, y]
}

// funzione per muoversi verso il basso
function moveDown(x, y) {
    return [x, y - 1]
}

// funzione per vedere se in quella casella c'è un nemico
// chiamata così: isEnemyAtPos([x, y], [x, y])
function isEnemyAtPos(posMe, posOther) {
    let me = chessboard[posMe[0]][posMe[1]] // prendo la posizione dove sono io
    let other = chessboard[posOther[0]][posOther[1]] // prendo la posizione dell'altro
    return isEnemy(me, other) // verifico se è un nemico
}

// funzione per vedere se la casella è vuota
function isEmpty(x, y) {
    return chessboard[x, y] === ''
}

// chiamata cosi: isEnemy('bP', 'nA')
function isEnemy(me, other) {
    return me[0] != other[0]
}

// se almeno uno tra x e y e' fuori allora il punto e' fuori
function isOutOfTheChessboard(x, y) {
    return x < 0 || x > 7 || y < 0 || y > 7
}


// TESTING AREA
let chessboard = [
    ['bT', 'bP', '', '', '', '', 'nP', 'nT'],
    ['bC', 'bP', '', '', 'nT', '', 'nP', 'nC'],
    ['bA', 'bP', '', '', '', '', 'nP', 'nA'],
    ['bR', 'bP', '', 'bP', 'bT', '', 'nP', 'nR'],
    ['bRe', 'bP', '', '', '', '', 'nP', 'nRe'],
    ['bA', 'bP', '', '', '', '', 'nP', 'nA'],
    ['bC', 'bP', '', '', '', '', 'nP', 'nC'],
    ['bT', 'bP', '', '', '', '', 'nP', 'nT'],
]

let lpm = legalPawnMoves([3, 3])
// console.log('Pawn:', lpm)

let ltm = legalTowerMoves([3, 4])
console.log('Tower:', ltm)