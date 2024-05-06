import React,{useEffect}from 'react'

export default function Mounting() {
    useEffect(()=>{
        console.log('compontent is mounted')
    })
  return (
    <div>Hiii</div>
  )
}
