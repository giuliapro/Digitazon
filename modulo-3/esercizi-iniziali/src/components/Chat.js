import { useState } from "react"

export default function Chat() {
    const [user, setUser] = useState("")
    const [text, setText] = useState("")
    const [arr, setArr] = useState([])


    function onClick() {
        let temp = arr.slice(0)

        temp.push({ user: user, text: text })
        setArr(temp)
    }

    return (
        <>
            <input onChange={(e) => { setUser(e.target.value) }} value={user} />
            <input onChange={(e) => { setText(e.target.value) }} value={text} />
            <button onClick={onClick} >

                send
            </button>
            <Messages messages={arr} />
        </>
    )
}

function Messages({ messages }) {
    return (
        <>
            {
                messages.map(message => {

                    return (
                        <div>
                            <bold> user : {message.user} </bold>
                            <span> text : {message.text} </span>

                        </div>
                    )
                })
            }
        </>
    )
}