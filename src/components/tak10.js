import React, { useState } from 'react'

export default function tak10() {
    const [text,setText]=useState('')
    const[text1,setText1]=useState('')
  return (
    <div>
        <h1>Todo List</h1>
        <input type='text' value={text} onChange={(e)=>{setText(e.target.value)}}></input>
        <button onClick={}>Add Task</button>
    </div>
  )
}
