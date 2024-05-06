import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useAuth } from './Auth1'



export default function Log() {
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const[userList,setUserList]=useState([])
    const[error,setError]=useState('')
    const auth=useAuth()

    useEffect(()=>{
        axios.get('http://localhost:3002/users')
        .then(res=>setUserList(res.data))
        .catch(err=>console.log(err))
    },[])

    const navigate=useNavigate()
    const handleLogin=(e)=>{
        e.preventDefault()
        const user=userList.find(x=>x.map ===email)
        if(user){
            if(user.password === password){
                auth?.login(user.name)
                navigate('/')
            }
            else{
                setError('Incorrect Password')
            }
        }
        else{
            setError('username not found')
        }
    }
  return (
    <div className='log-content'>
        <h1>Login</h1>
<form className='form2' onSubmit={handleLogin}>
<table>
    <tbody>
    <tr>
        <td><label>Email:</label>
        </td>
        <td><input type='email' value={email} onChange={(e)=>setEmail(e.target.value)}/></td>
    </tr>
    <tr>
        <td><label>Password:</label>
        </td>
        <td><input type='password' value={password} onChange={(e)=>setPassword(e.target.value)}/></td>
    </tr>
    <tr>
        <td>
            <button className='buttons' type='submit'>Login</button>
        </td>
    </tr>
    </tbody>
</table>

</form>

{error}



    </div>
  )
}