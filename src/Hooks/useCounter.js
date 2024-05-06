import React, { useState } from 'react'

function useCounter(initialValue = 0, incValue) {
    const [count, setCount] = useState(initialValue)
    const handleInc = () => {
        setCount(count + incValue)
    }
    const handleDec = () => {
        setCount(count - incValue)
    }
    const handleReset=()=>{
        setCount(initialValue)
    }
    return[count,handleDec,handleInc,handleReset]
}

export default useCounter