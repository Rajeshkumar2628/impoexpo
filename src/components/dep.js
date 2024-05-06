import React, { useEffect, useState } from 'react'

export default function Dep() {
    const [count, setCount] = useState(0)
    const [count1, setCount1] = useState(0)
    const [name, setName] = useState('')
    useEffect(() => {
        console.log('component is mounted')
    }, [count, name,count1])
    return (
        <div>
            <button onClick={() => {
                setCount(count + 1)
            }}> Clicked{count}times</button>

            <button onClick={() => {
                setCount1(count1 + 1)
            }}> Clicked{count1}times</button>

            <input type='text' value={name} onChange={(e)=>{
                setName(e.target.value) }}/>




        </div>
    )
}
