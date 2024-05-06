import React, { useEffect, useState } from 'react'

export default function Task6() {
    const[count,setCount]=useState(0)
    const [running,setRunning]=useState('true')
    const[interval,setIntervalId]=useState()
    const[change,setChange]=useState('')
    useEffect(()=>{
        const interval=setInterval(()=>{
            setCount(prev=>prev+1)
        },1000)
        setIntervalId(interval)
        return()=>{
            clearInterval(interval)
        }
    },[setRunning])
    if(running)
    


  return (
    <div>
        <h1>TIME</h1>
        {count}
        <button onClick={()=>setCount()}>start</button>
    </div>
  )
}
