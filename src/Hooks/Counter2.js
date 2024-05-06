import React from 'react'
import useCounter from './useCounter'

export default function Counter2() {
    const[count,Inc,Dec,Res]=useCounter(0,5)
  return (
    <div>
        <button onClick={Inc}>Increment</button>
        <button onClick={Dec}>Decrement</button>
        <button onClick={Res}>Reset</button>
    </div>
  )
}
