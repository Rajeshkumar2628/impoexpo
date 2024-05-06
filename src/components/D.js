import React, { useContext } from 'react'
import { CounterContext } from '../App'

export default function D() {
    const counter =useContext(CounterContext)
    return (
        <div>
            D
            <button onClick={() => counter.dispatch('inc')}>+</button>
            <button onClick={() => counter.dispatch('dec')}>-</button>
            <button onClick={() => counter.dispatch('reset')}>clear</button>

        </div>
    )
}
