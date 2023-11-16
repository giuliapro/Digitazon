export default function Chessboard() {
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

    const squares = []

    for (let i = 0; i < chessboard.length; i++) {
        for (let j = 0; j < chessboard[i].length; j++) {
            const position = String.fromCharCode('a'.charCodeAt(0) + j) + (chessboard.length - i)
            const color = (i + j) % 2 === 0 ? 'white' : 'black'

            squares.push(
                <Square
                    key={position}
                    color={color}
                    position={position}
                />
            )
        }

        // Aggiungi una riga vuota dopo ogni riga della scacchiera tranne l'ultima
        if (i < chessboard.length - 1) {
            squares.push(<div key={'empty${i}'} className="empty-row" />)
        }
    }

    return <div className="chessboard">{squares}</div>

    // return (
    //     <>
    //         <div className="board-row">
    //             <Square color="black"/>
    //             <Square />
    //             <Square color="black"/>
    //             <Square />
    //             <Square color="black"/>
    //             <Square />
    //             <Square color="black"/>
    //             <Square />
    //         </div>
    //         <div className="board-row">
    //             <Square />
    //             <Square color="black"/>
    //             <Square />
    //             <Square color="black"/>
    //             <Square />
    //             <Square color="black"/>
    //             <Square />
    //             <Square color="black"/>
    //         </div>
    //     </>
    // )
}

function Square({color, position}) {
    return (
        <button className={`square background-${color}`} ></button>  //{"square" + color}

    )
}