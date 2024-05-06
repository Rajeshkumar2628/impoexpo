import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Htlist() {
    const[list,setList]=useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res=>{setList(res.data)})
        .catch(err=>{console.log(err)})
    },[])
   
  return (
    <div>
       {list.map(x=><p>{x.title}</p>)}
    </div>
  )
}
