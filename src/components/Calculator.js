import  { useState } from "react";
export default function Calculator(){
    
    const[input,setInput]=useState('')
    return(
        <div>
           <input type='text' value={input}/><br></br>
           <button onClick ={()=>{setInput(input+'1')}}>1</button>
           <button onClick ={()=>{setInput(input+'1')}}>2</button>
           <button onClick ={()=>{setInput(input+'1')}}>3</button>
           <button onClick ={()=>{setInput(input+'1')}}>4</button>
           <button onClick ={()=>{setInput(input+'1')}}>5</button>
           <button onClick ={()=>{setInput(input+'1')}}>6</button>
           <button onClick ={()=>{setInput(input+'1')}}>7</button>
           <button onClick ={()=>{setInput(input+'1')}}>8</button>
           <button onClick ={()=>{setInput(input+'1')}}>9</button>
           <button onClick ={()=>{setInput(input+'1')}}>0</button>
           \<button onClick ={()=>{setInput(input+'1')}}>+</button>
           <button onClick ={()=>{setInput(eval(input))}}>=</button>
           

           

           

           
    
        </div>
    )
}