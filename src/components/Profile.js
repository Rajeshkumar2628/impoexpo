import React from 'react'
import { UseAuth } from './Auth'
import { useNavigate } from 'react-router-dom'

export default function Profile() {
    const auth= UseAuth()
    const navigate=useNavigate()

    const handleLogout=()=>{
        auth.logout()
        navigate('/')
    }

  return (
    <div>
        welcome {auth.user}
        <button onClick={handleLogout}>Logout</button>
    </div>
  )
}
