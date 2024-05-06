import React, { useState } from 'react'
import useDocumentTitle from './useDocumentTitle'

export default function Click2() {
    const[count,setCount]=useState(5)
    useDocumentTitle(count)
  return (
    <div>
<button onClick={()=>{setCount(count+1)}}>Click Here</button>

    </div>
  )
}
