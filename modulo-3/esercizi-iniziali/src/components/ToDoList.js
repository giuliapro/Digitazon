import { useState } from 'react'

export default function ToDoList() {
    const [list, setList] = useState([])

    return (
        <div>
            <Controls list={list} setList={setList} />
            <ToDoElements list={list} setList={setList} />
        </div>
    )
}

function Controls({ list, setList }) {
    const [input, setInput] = useState("")
    function handleClick() {
        let temp = JSON.parse(JSON.stringify(list))
        temp.push({ text: input, checked: false })
        setList(temp)
        setInput('')
    }

    return (
        <>
            <input type="text" onChange={(e) => { setInput(e.target.value) }} value={input} />
            <button onClick={handleClick}> ADD </button>
        </>
    )
}

function ToDoElements({ list, listCheck }) {
    const tempNonFlag = list.filter((toDo) => !toDo.checked)
    const tempFlagged = list.filter((toDo) => toDo.checked)

    return (
        <>
            {
                tempNonFlag.map((e, i) => <ToDoElement element={e} key={i} />
                )
            }
            {
                tempFlagged.map((e, i) => <ToDoElement element={e} key={i} />
                )
            }
        </>
    )
}

function ToDoElement({ element }) {
    const [color, setColor] = useState("black")
    return (
        <li>
            <input
                type='checkbox'
                onChange={e => {
                    setColor(e.target.checked ? "grey" : "black")
                    element.checked = e.target.checked
                }
                } />
            <span style={{ color: color }}>{element.text}</span>
        </li>
    )
}