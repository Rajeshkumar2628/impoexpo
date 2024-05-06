import React, { useState } from 'react'
import axios from 'axios'
import {  useNavigate } from 'react-router-dom'

export default function Signup() {
    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    
      const navigate=useNavigate()

    const  handleClick=()=>{
      axios.post('http://localhost:3001/users',{
        name,email,password
      })
      .then(res=>{console.log(res)})
      .catch(err=>{console.log(err)})
      navigate('/login')
    }
  return (
    <div>
        <form>
            <label>Name:</label>
            <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/><br></br>
            <label>Email:</label>
            <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)}/><br></br>
            <label>Password:</label>
            <input type='text' value={password} onChange={(e)=>setPassword(e.target.value)} />
            <button onClick={handleClick}>Submit</button>
        </form>
    </div>
  )
}
