import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { UseAuth } from './Auth'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userList, setUserList] = useState([])
    const [error, setError] = useState('')

    const auth = UseAuth()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:3001/users')
            .then(res => setUserList(res.data))
            // .catch(err => console.log(err))
    }, [])

    const handleLogin = (e) => {
        e.preventDefault()
        const user = userList.find(x => x.email === email)
        if (user) {
            if (user.password === password) {
                auth?.login(user.name)
                navigate('/')
            }
            else {
                setError('wrong password')
            }
        }

        else {
            setError('user not found')
        }
    }


    return (
        <div>
            <form onSubmit={handleLogin}>
                <label>Email:</label>
                <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} /><br></br>
                <label>Password:</label>
                <input type='text' value={password} onChange={(e) => setPassword(e.target.value)} /><br></br>
                <button type='submit'>Login</button>

            </form>
            {error}
        </div>
    )
}
