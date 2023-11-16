import { useEffect, useState } from "react";


export default function PlusMinus({ min, max }) {
    const [count, setCount] = useState(0)

    function plus() {
        if (count < max) {
            setCount(count + 1)
        }
    }
    function minus() {
        if (count > min) {
            setCount(count - 1)
        }
    }
    return (
        < div >
            <p> {count} </p>
            <button onClick={plus}> Plus </button>
            <button onClick={minus}> Minus </button>
        </div >


    )
}

