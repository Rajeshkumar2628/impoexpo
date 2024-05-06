import React, { useState } from 'react'

export default function Todo() {
    const[newtodo,setNewTodo]=useState('')
    const[todo,setTodo]=useState([])

    const handleAdd=()=>{
        if(newtodo !==''){
        setTodo([...todo,{id:todo.length+1,task:newtodo}])
        }
  }
    const handleDelete=(id)=>{
        setTodo(todo.filter(x=> x.id !== id))
    }
  return (
    <div>
    <h1>Todo List</h1>
    <input type='text' value={newtodo} onChange={(e)=>{setNewTodo(e.target.value)}}/>
    <button onClick={handleAdd}>ADD DATA</button>
    <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Task</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {todo.map(x=>(<tr>
                <td>{x.id}</td>
                <td>{x.task}</td>
                <td><button onClick={()=>handleDelete(x.id)}>Delete</button></td>
            </tr>))}
        </tbody>
    </table>
    </div>
  )
}
