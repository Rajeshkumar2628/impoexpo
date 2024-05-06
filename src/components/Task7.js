import React, { useEffect, useState } from 'react'
import './Happy.css';

export default function Task7() {
    const[duration,setDuration]=useState(0)
    const[seconds,setSeconds]=useState(0)
    const[isrunning,setISRunning]=useState(false)
    const[istimercompleted,setIsTimerCompleted]=useState(false)

    const handlechange=(e)=>{
        setDuration(e.target.value)
        setSeconds(e.target.value)
    }
    useEffect(()=>{
        let interval
        if(isrunning && seconds>0){
            interval=setInterval(() => {
               setSeconds(prev=>prev-1) 
            },1000);
        }
    
        else if(seconds===0 && isrunning){
            setIsTimerCompleted(true)
            setISRunning(false)
        }
        return()=>{
            clearInterval(interval)
        }

    },[isrunning,seconds])
    const progressWidth=(seconds/duration)*100
    return (
        <div>
        {istimercompleted?(<h1>Have a nice day!!💚</h1>):(
            <div className='container'>
           <div className='progress' style={{width:progressWidth+'%'}}>
            </div>          </div>
        )}
        <br></br>
        <input type='number' value={duration} onChange={handlechange} disabled={isrunning}/>
        {isrunning?(<button onClick={()=>{setISRunning(false)}}>Stop</button>) :
        (<button onClick={()=>{setISRunning(true)}}>start</button>)}
        <button onClick={()=>{setSeconds(duration);setIsTimerCompleted(false)}}>Reset</button>
        </div>
    
    )
}
