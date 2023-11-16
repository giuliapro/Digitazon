// dati due numeri, mostrare la divisione
// l'output viene mostrato se:
// abbiamo due input e non solo uno
// entrambi gli input sono dei numeri
// il risultato è un numero intero

import '../../App.css'

import { useState, useEffect } from "react";

export default function Division() {
    const [num1, setNum1] = useState(null)
    const [num2, setNum2] = useState(null)
    const [division, setDivision] = useState([])

    useEffect(() => {
        if (num1 !== null && num2 !== null) {
            let division = Number(num1) / Number(num2)
            if (division !== parseInt(division, 10)) {
                alert("aoooo il risultato non è un numero intero")
            } else {
                setDivision(division)
            }
        }
    }, [num1, num2])

    return (
        <>
        <div className="wrapper-calc">
                <input 
                type="number"
                onChange={(e) => setNum1(e.target.value)}
                value={num1}
                />
                <p>:</p>
                <input 
                type="number"
                onChange={(e) => setNum2(e.target.value)}
                value={num2}
                />
                <p>Risultato: {division}</p>
            </div>
        </>
    )
}