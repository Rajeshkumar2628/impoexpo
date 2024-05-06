import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Order() {
    const navigate=useNavigate()
  return (
    <div>Order is confirmed
        <button onClick={()=>{navigate(-1)}}>Go back</button>
    </div>
  )
}
