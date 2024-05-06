import React,{useState} from 'react';
export default function Toggle(){
    const [toggle,setToggle]=useState
    const tog=()=>{
        setToggle("off")
        if(toggle=="off"){
            





























































            setToggle("on")
        }
    }



   return(
        <div>
            {toggle}
            <button onClick={tog}>Toggle</button>
        </div>
    )
}


