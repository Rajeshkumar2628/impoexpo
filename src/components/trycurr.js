import React, { useState } from 'react'

export default function trycurr() {
    const [inr,setInr]=useState()
    const [usd,setUsd]=useState(0)
    const [text,setText]=useState(false)    
    const Convert=(e)=>{
setUsd(e.target.value)
    }  
const handleClick=()=>{
    setText(true)
    setInr(usd*83.62)
}


  return (
    <div id='currencyConverter'></div>

  )
}


// const [output,setOutput]=useState('')
// setOutput(`Input:${input}\ntextarea${}`)
// <p id='output'>{}</p>