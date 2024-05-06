import React, { useEffect, useState } from 'react'

export default function Mousemove() {
    const[x,setX]=useState(0)
    const[y,setY]=useState(0)
    const logPostion=(e)=>{
        console.log('mouse is moving')
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(()=>{
        window.addEventListener('mousemove',logPostion)
    return()=>{
        window.removeEventListener('mousemove',logPostion)
}},[])
  return (
    <div>Mouse move 
        x-{x}y-{y}
    </div>
  )
}
