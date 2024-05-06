import React, { useState } from 'react'

export default function Currency() {
    const[currency,setCurrency]=useState()
    const[currency1,setCurrency2]=useState()
    const[input,setInput]=useState()
    const[input1,setInput1]=useState()
    const values = {
        'usd to usd':1,
        'inr to inr':1,
        'eur to eur':1,
        'inr to usd':0.12,
        'inr to eur':0.044,
        'usd to eur':70.54,
        'usd to inr':83.62,
        'gbp to inr':34.97,
        'gbp to usd':34.97,
        'gbp to gbp':1,
    }
    const changeCurrency=(e)=>{
        setCurrency(e.target.value)

    }
    const changeCurrency1=(e)=>{
        setCurrency2(e.target.value)
    }
    const changeInput=(e)=>{
        setInput(e.target.value)
        setInput1(e.target.value*values[`${currency} to ${currency1}`])
    }
    const changeInput1=(e)=>{
        setInput1(e.target.value)
        setInput(e.target.value/values[`${currency} to ${currency1}`])
    }
    return (
        <div>
            <input type='number' value={input} onChange={changeInput}/>
            <select onChange={changeCurrency}>
                <option value='inr'>INR</option>
                <option value='usd'>USD</option>
                <option value='eur'>EUR</option>
                <option value='gbp'>GBP</option>
            </select>
            <input type='number' value={input1} onChange={changeInput1}/>
            <select onChange={changeCurrency1}>
                <option value='inr'>INR</option>
                <option value='usd'>USD</option>
                <option value='eur'>EUR</option>
                <option value='gbp'>GBP</option>
            </select>
        </div>
    )
}
