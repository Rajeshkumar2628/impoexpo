import React, { useEffect, useRef } from 'react'

export default function Useref() {
    const inputRef = useRef()
    useEffect(() => {
        inputRef.current.focus()
    }, [])
    return (
        <div>
           <input ref={inputRef}/>

        </div>
    )
}
