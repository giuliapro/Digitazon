// modellare una classifica dove delle squadre si sfidano a coppie
// inserire un pulsante su ogni squadra che se premi, la mandi avanti
// se hai premuto quello della squadra a, quello della squadra b si disattiva

import "../App.css";

import { useState, useEffect } from "react";

export default function Chart() {
    const [giro1, setGiro1] = useState(['A', 'B'])
    const [giro2, setGiro2] = useState([])
    const [click, setClick] = useState(false)

    function Avanza(index) {
        const newGiro = giro1[index]
        setGiro2([newGiro])
        setClick(!click)
    }

    return (
        <>
            <div className="chart-wrapper">
                <div className="match">
                    {giro1.map((i, index) => (<div className="team">{i}
                    <Button visible={click} Avanza={() => Avanza(index)}/></div>))}
                </div>
                <div className="match">
                    {giro2.map((i) => (<div className="team">{i}</div>))}
                </div>
            </div>

        </>
    )
}

function Button({ visible, Avanza }) {
    return (
        <>
            <button hidden={visible} onClick={Avanza}>Avanza</button>
        </>
    )
}