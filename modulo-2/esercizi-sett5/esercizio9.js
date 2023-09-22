// Le transizioni dipendono unicamente dallo stato delle celle vicine in quella generazione:
//      Qualsiasi cella viva con meno di due celle vive adiacenti muore, come per effetto d'isolamento;
//      Qualsiasi cella viva con due o tre celle vive adiacenti sopravvive alla generazione successiva;
//      Qualsiasi cella viva con più di tre celle vive adiacenti muore, come per effetto di sovrappopolazione;
//      Qualsiasi cella morta con esattamente tre celle vive adiacenti diventa una cella viva, come per effetto di riproduzione.

// creiamo una board
// controllo presenza delle celle intorno ad essa
// se sono vuote,
//      creo funzione per chiedervi se cella intorno è vuota
// se ci sono meno di due celle piene,
//      la seconda casella diventa vuota

let board = [
    ['', '', '',],
    ['', '', '',],
    ['', '', 'x',]
]

function isOut(cella, board) {
    let x = cella[0]
    let y = cella[1]

    return x < 0 || x >= board.length || y < 0 || y >= board.length
}

function presenza(cella, board) {
    let x = cella[0]
    let y = cella[1]
    let count = 0
    if (!isOut([x - 1, y - 1], board) && board[x - 1][y - 1] == 'x') {
        count += 1
    }
    if (!isOut([x - 1, y], board) && board[x - 1][y] == 'x') {
        count += 1
    }
    if (!isOut([x - 1, y + 1], board) && board[x - 1][y + 1] == 'x') {
        count += 1
    }
    if (!isOut([x, y + 1], board) && board[x][y + 1] == 'x') {
        count += 1
    }
    if (!isOut([x + 1, y + 1], board) && board[x + 1][y + 1] == 'x') {
        count += 1
    }
    if (!isOut([x + 1, y], board) && board[x + 1][y] == 'x') {
        count += 1
    }
    if (!isOut([x + 1, y - 1], board) && board[x + 1][y - 1] == 'x') {
        count += 1
    }
    if (!isOut([x, y - 1], board) && board[x][y - 1] == 'x') {
        count += 1
    }

    return count
}

console.log(presenza([0, 1], board))
