import React, { useState } from 'react'

export default function Converter2() {
    let values={
        'usd to usd':1,
        'inr to inr':1,
        'aed to aed':1,
        'inr to usd':0.12,
        'inr to aed':0.044,
        'usd to aed':70.54,
        'usd to inr':83.62,
    }
    const[currency1,setCurrency1]=useState('inr')
    const[currency2,setCurrency2]=useState('inr')
    const[input1,setInp1]=useState(0)
    const[input2,setInp2]=useState(0)

    const changeCurrency1=(e)=>{
        setCurrency1(e.target.value)
    }
    const changeCurrency2=(e)=>{
        setCurrency2(e.target.value)
    }
    const changeInput1=(e)=>{
        setInp1(e.target.value)
        setInp2(e.target.value*values[`${currency1} to ${currency2}`])
      
    }
    const changeInput2=(e)=>{
        setInp2(e.target.value)
        setInp1(e.target.value/values[`${currency1} to ${currency2}`])
        
    }
    return (
        <div>
            <select  onChange={changeCurrency1}>
                <option value='inr'>INR</option>
                <option value='usd'>USD</option>
                <option value='aed'>AED</option> 
            </select>
            <input type='number' value={input1} onChange={changeInput1} />
            <select  onChange={changeCurrency2}>
                <option value='inr'>INR</option>
                <option value='usd'>USD</option>
                <option value='aed'>AED</option>
            </select>
            <input type='number' value={input2} onChange={changeInput2} />

        </div>
    )
}
