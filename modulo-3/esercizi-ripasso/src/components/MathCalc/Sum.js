// dati due numeri, mostrare la somma
// l'output viene mostrato se:
// abbiamo due input e non solo uno
// entrambi gli input sono dei numeri

import '../../App.css'

import { useState, useEffect } from "react";

export default function Sum() {
    const [num1, setNum1] = useState(null)
    const [num2, setNum2] = useState(null)
    const [sum, setSum] = useState([])

    useEffect(() => {
        if (num1 !== null && num2 !== null) {
            setSum(Number(num1) + Number(num2))
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
                <p>+</p>
                <input
                    type="number"
                    onChange={(e) => setNum2(e.target.value)}
                    value={num2}
                />
                <p>Risultato: {sum}</p>
            </div>
        </>
    )
}