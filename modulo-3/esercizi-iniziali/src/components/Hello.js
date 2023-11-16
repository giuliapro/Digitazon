import { useState, useEffect } from "react";

export default function Hello() {
    const [texts, setText] = useState([])
function addText() {
    let temp = texts.slice(0)
    temp.push("Hello")
    setText((temp) => {

    })
}
    return (
        <>
            <ul>
            {texts.map((h) => (<li>{h}</li>))}

            </ul>
            <button onClick={addText}>click</button>
        </>
    )
}