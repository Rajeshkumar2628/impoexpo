import React, { useState } from 'react'

export default function Form() {
    const[input,setInput]=useState('')
    const[textarea,setTextArea]=useState('')
    const[option,setOption]=useState('')
    const[value,setValue]=useState(null)

    const handleClick=(e)=>{
        e.preventDefault()
        setValue(`Input:${input} textarea:${textarea} option:${option}`)
    }
  return (
    <div>
        <div>
            <form onSubmit={handleClick}>
            <label>Input:</label>
            <input type='text'value={input} onChange={(e)=>{setInput(e.target.value)}}/>
            <label>Textarea:</label>
            <textarea type='text'value={textarea} onChange={(e)=>{setTextArea(e.target.value)}}></textarea>
            <select value={option} onChange={(e)=>{setOption(e.target.value)}}>
                <option>select an option</option>
                <option value='option1'>option1</option>
                <option>option2</option>
                <option>option3</option>
            </select>
            <button type='submit'>submit</button>
            </form>
            
        </div>
<p>{value}</p>


    </div>
  )
}
