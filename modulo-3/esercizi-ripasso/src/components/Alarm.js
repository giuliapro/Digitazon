// creare un componente con le funzionalità di una sveglia
// che prende in ingresso 2 campi input (ora e minuti)
// e quando segna l'ora corretta, manda un alert

import "../App.css";

import { useState, useEffect } from "react";

export default function Alarm() {
    const [hour, setHour] = useState(0)
    const [min, setMin] = useState(0)
    const [alarm, setAlarm] = useState([])

    const handleHour = (e) => {
        let newHour = e.target.value
        setHour(newHour)
    }

    const handleMin = (e) => {
        let newMin = e.target.value
        setMin(newMin)
    }

    const handleClick = () => {
        let newAlarm = {
            ore: hour,
            minuti: min
        }
        let temp = JSON.parse(JSON.stringify(alarm)) // faccio la copia
        temp.push(newAlarm)
        setAlarm(temp)
    }


    return (
        <>
            <div className="alarm-input">
                <input className="input-style"
                    type="number"
                    value={hour}
                    onChange={handleHour}
                />
                <p>:</p>
                <input className="input-style"
                    type="number"
                    value={min}
                    onChange={handleMin}
                />
            </div>
            <div className="alarm-button">
                <button onClick={handleClick}>Aggiungi sveglia</button>
            </div>
            <div className="alarm-list">
                {alarm.map((a) => (
                    <p>
                       Sveglia: {a.ore}:{a.minuti}
                    </p>
                ))}

            </div>

        </>
    )
}