import React, { useContext } from 'react'
import { PasswordContext,UserContext } from '../App'

export default function S() {
    const user=useContext(UserContext)
    const password=useContext(PasswordContext)
  return (
    <div>
        {user.name} in F.js {user.age}
        {password}
    </div>
  )
}
 