import React, { useEffect } from 'react'
import axios from 'axios'

export default function Http() {
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res=>{console.log(res)})
        .catch(err=>{console.log(err)})
    })
  return (
    <div>Http</div>
  )
}
