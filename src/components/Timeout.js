import React, { useEffect, useState } from 'react'

export default function Timeout() {
    const[count,setCount]=useState(0)
    useEffect(()=>{
        const Timeout=setTimeout(()=>{
            setCount(prev=>prev+1)
        },1000)
        return()=>{
            clearTimeout(Timeout)
        }
    })
    
  return (
    <div>{count}</div>
  )
}
