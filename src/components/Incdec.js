import React, { useReducer } from 'react'

export default function Incdec() {
    const initialState=0
    const reducer=(state,action)=>{
        switch(action.type){
            case 'inc1':return state+action.value
            case 'dec1':return state-action.value
            case 'inc2':return state-action.value
            case 'dec2':return state+action.value

        }
    }
    const[count,dispatch]=useReducer(reducer,initialState)
  return (
    <div>
        {count}
        <button onClick={()=>dispatch({type:'inc1',value:1})}>Increment</button>
        <button onClick={()=>dispatch({type:'dec1',value:5})}>Decrement</button>
        <button onClick={()=>dispatch({type:'inc2',value:1})}>Increment</button>
        <button onClick={()=>dispatch({type:'dec2',value:5})}>Decrement</button>
    </div>
  )
}
