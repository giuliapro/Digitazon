// avendo base e altezza,
// calcolare l'area del triangolo (b*h /2)

import '../../App.css'

import { useState, useEffect } from "react";

export default function Triangle() {
    const [base, setBase] = useState(null)
    const [alt, setAlt] = useState(null)
    const [area, setArea] = useState([])

    useEffect(() => {
        if (base !== null && alt !== null) {
            let area = (Number(base) * Number(alt)) / 2
            setArea(area)
        }
    }, [base, alt])

    return (
        <>
            <div className="wrapper-calc">
                <input
                    type="number"
                    onChange={(e) => setBase(e.target.value)}
                    value={base}
                />
                <input
                    type="number"
                    onChange={(e) => setAlt(e.target.value)}
                    value={alt}
                />
                <p>Area triangolo: {area}</p>
            </div>
        </>
    )
}