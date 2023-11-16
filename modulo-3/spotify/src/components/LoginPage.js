import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function LoginPage() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    async function handleLogin() {
        try {
            let response = await fetch("https://fakestoreapi.com/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                })
            })
            response = await response.json()
            console.log(response)
            if (response.token) {
                localStorage.setItem('login', true)
                navigate("/")
            } else {
                setPassword("")
                setUsername("")
                alert('Login failed. Please check your credentials.')
            }
        } catch (error) {
            console.error('Error: ', error)
        }

    }

   
        return (
            <div className='wrapper-login'>
                <div className='login'>
                    <div className='title'>
                        <h2>Login</h2>
                    </div>
                    <div className='form'>
                        <div>
                            <div>
                                <input className='input-login'
                                    placeholder='Username'
                                    type="text"
                                    id="username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>
                            <div>
                                <input className='input-login'
                                    placeholder='Password'
                                    type="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <button className='input-login button-login' onClick={handleLogin}>Login</button>
                        </div>
                    </div>
                </div>


            </div>
        )
    }