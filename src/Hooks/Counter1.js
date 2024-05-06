import React from 'react'
import useCounter from './useCounter'

export default function Counter1() {
    const[count,Inr,Dec,Res]=useCounter(0,1)
    return (
        <div>
            <button onClick={Inr}>Increment</button>
            <button onClick={Dec}>Decrement</button>
            <button onClick={Res}>Reset</button>
        </div>
    )
}
