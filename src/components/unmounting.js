import React, { useState } from 'react'
import Mousemove from './Mousemove'

export default function Unmounting() {
    const[toggle,setToggle]=useState(true)
  return (
    <div><button onClick={()=>{setToggle(!toggle)}}>toggle</button>
    {toggle &&<Mousemove/>}
    
        </div>
  )
}
