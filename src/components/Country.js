import React, { useState } from 'react'

export default function Country() {
    const[ country,setCountry]=useState()
    const[country1,setCountry1]=useState()

    const handleClick1=()=>{
        setCountry('name:chennai')
        setCountry1('place:beach')

    }
    const handleClick2=()=>{
        setCountry('name:salem')
        setCountry1('place:park')
    }
  return (
    <div>
        <div>
        <ul>
            <li onClick={handleClick1}>chennai</li>
            <li onClick={handleClick2}>salem</li>
        </ul>
</div>
<p>{country}</p>
<p>{country1}</p>
    </div>
  )
}
