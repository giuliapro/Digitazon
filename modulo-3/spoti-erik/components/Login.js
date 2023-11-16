import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const [user, setUser] = useState("")
    const [pass, setPass] = useState("")
    const [login, setLogin] = useState(false)
    const navigate = useNavigate()



    if (login) {
        localStorage.setItem("login", login)
        return navigate("/")
    }


    function Click() {

        fetch("https://fakestoreapi.com/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: user,
                password: pass,
            }),
        })
            .then(response => {
                if (response.ok) {
                    setLogin(!login)

                }
            })
    }



    return (
        <div className='login'>
            <p>Usarname: <input type="text" onChange={e => setUser(e.target.value)} /> </p>
            <p>Password: <input type="text" onChange={e => setPass(e.target.value)} /> </p>
            <button className='loginB' onClick={Click}>Login</button>
        </div>
    )
}