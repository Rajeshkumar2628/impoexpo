import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
export default function Signup() {



    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        axios.post('http://localhost:3001/users', { name, email, password })
            .then(res => { console.log(res) })
            .catch(err => { console.log(err) })
        navigate('/login')
    }

    return (
        <div className='container-fluid box'>
            <div className='signup'>
                <h1>Sign up</h1>
                <form className='form1' onSubmit={handleSubmit}>
                    <table className='signtable'>
                        <tr>
                            <td>
                                <label>User name:</label>
                            </td>
                            <td>
                                <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter your Name' />
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <label>Email:</label>
                            </td>
                            <td>
                                <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter your mail id' />
                                <tr></tr>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Password:</label>
                            </td>
                            <td>
                                <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter password' />
                                <tr></tr>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <button className='signbtn' type='submit'>Sign up</button>
                            </td>
                        </tr>
                    </table>
                </form>
            </div>
        </div>
    )
}
