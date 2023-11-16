// ho in input
// quando inserisco un numero di 3 cifre
// se il numero è pari, lo metto a sx
// se è dispari lo metto a dx

import { useState, useEffect } from "react";

export default function PariDispari() {
    const [num, setNum] = useState(0)
    const [pari, setPari] = useState([])
    const [dispari, setDispari] = useState([])

    const handleNum = (e) => {
        let n = e.target.value
        setNum(n)
    }

    useEffect(() => {
        if (num >= 100) {
            if (num % 2 === 0) {
                let newNum = [...pari]
                newNum.push(num)
                setPari(newNum)
            } else {
                let newNum = [...dispari]
                newNum.push(num)
                setDispari(newNum)
            }
        }

    }, [num])

    return (
        <>
            <input type="text" onChange={handleNum} value={num} />
            <div className="wrapper">
                <div className="left">
                    <ul>
                        {pari.map((numero) => <li>{numero}</li>)}
                    </ul>
                </div>
                <div className="right">
                    <ul>
                        {dispari.map((numero) => <li>{numero}</li>)}
                    </ul>
                </div>
            </div>

        </>
    )
}