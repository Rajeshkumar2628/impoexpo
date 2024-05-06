import React,{useState,useEffect} from 'react'

export default function Updating() {
    const[count,setCount]=useState(0)
    useEffect(()=>{
        console.log("component is mounted")
    })
  return (
    <div>
        <button onClick={()=>{
            setCount (count+1) }}>Clicked{count}times</button>
    </div>
  )
}
