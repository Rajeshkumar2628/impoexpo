import React, { useState } from "react";
export default function Employee() {
    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [job, setJob] = useState('')
    const [list, setList] = useState([])
    const changeId = (e) => {
        setId(e.target.value)
    }

    const changeName = (e) => {
        setName(e.target.value)
    }
    const changeJob = (e) => {
        setJob(e.target.value)
    }
    const handleClick = () => {
        setList([...list,{id:id,name:name,job:job}])
    }


    return (
        <div>
        
            <h1>Add Employee</h1>
            <label>Employee ID:</label>
            <input type='number' value={id} onChange={changeId} /><br></br>
            <label>Name:</label>
            <input type='text' value={name} onChange={changeName} /><br></br>
            <label>Job:</label>
            <select onChange={changeJob} >
                <option value='Developer'>Developer</option>
                <option value='Tester'>Tester</option>
            </select><br></br>
            <button onClick={handleClick}>Add Employee</button>


            <h1>Employee List</h1>
            <table border={'2px'}>
                <thead>
                <tr>
                    <td>Employee ID</td>
                    <td>Name</td>
                    <td>job</td>
                </tr>
            </thead>
            <tbody>
                {list.map(x=>(
                    <tr key={x.id}>
                        <td>{x.id}</td>
                        <td>{x.name}</td>
                        <td>{x.job}</td>
                    </tr>
                ))}
            </tbody>
            </table>
        </div>
    )
}