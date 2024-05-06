import React, { useEffect, useState } from 'react'

export default function Httid() {
    const[data,setData]=useState({})
    const[id,setId]=useState(1)
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/${id}')
        .then( )
    })
  return (
    <div>Httid</div>
  )
}
