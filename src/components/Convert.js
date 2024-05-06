import React, { useState } from 'react';
export default function Convert() {
    let values = {
        'inr to inr': 1,
        'usd to usd': 1,
        'aed to aed': 1,
        'inr to usd': 0.012,
        'inr to aed': 0.044
    }
    const [currency1, setCurrency1] = useState('inr')
    const [currency2, setCurrency2] = useState('inr')
    const [inp1, setInp1] = useState(0)
    const [inp2, setInp2] = useState(0)

    const changeCurrency1 = (e) => {
        setCurrency1(e.target.value)
    }
    const changeCurrency2 = (e) => {
        setCurrency2(e.target.value)
    }
    const changeInp1 = (e) => {
        setInp1(e.target.value);
        setInp2(e.target.value * values[`${currency1}to ${currency2}`])
    }
    const changeInp2 = (e) => {
        setInp2(e.target.value);
        setInp1(e.target.value / values[`${currency1}to ${currency2}`])
    }

    return (
        <div>
            <select value={currency1} onChange={changeCurrency1}>
                <option value='inr'>inr</option>
                <option value='usd'>usd</option>
                <option value='aed'>aed</option>
            </select>

            <input type='number' value={inp1} onChange={changeInp1}/><br></br>

                <select value={currency2} onChange={changeCurrency2}>
                    <option value='inr'>inr</option>
                    <option value='usd'>usd</option>
                    <option value='aed'>aed</option>
                </select>

                <input type='number' value={inp2} onChange={changeInp2} />

        </div>
    )
}
