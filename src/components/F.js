import React, { useContext } from 'react'
import { CounterContext } from '../App'

export default function F() {
    const counter=useContext(CounterContext)
    return (
        <div>
            F
            <button onClick={() => counter.dispatch('inc')}>+</button>
            <button onClick={() => counter.dispatch('dec')}>-</button>
            <button onClick={() => counter.dispatch('reset')}>clear</button>
        </div>
    )
}
