import React, { useReducer, useState } from 'react'

export default function Task8() {
    const [productA, setProductA] = useState(false)
    const [productB, setProductB] = useState(false)


    const initialState = 0
    const reducer = (state, action) => { 
        switch (action.type) {
            case 'productA': return state + 1
            case 'productAdec': return state - 1
            case 'productB': return state + 1
            case 'productBdec': return state - 1
            default: return state;
        }
    }
    const [count1, dispatch1] = useReducer(reducer, initialState)
    const [count2, dispatch2] = useReducer(reducer, initialState)
    return (
        <div>
            <h1>Shopping Cart</h1>
            {productA && <h3>ProductA Quality:{count1}</h3>}
            <button onClick={() => { dispatch1({ type: 'productA' }); (setProductA(true)) }} >Add productA</button>
            {productB && <h3>productB Quality:{count2}</h3>}
            <button onClick={() => { dispatch2({ type: 'productB' }); (setProductB(true)) }}>Add productB</button>


        </div>
    )
}
