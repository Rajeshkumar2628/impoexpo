import React from 'react'
import { UseAuth } from './Auth'
import { Navigate } from 'react-router-dom'

export default function RequiredAuth(props) {
    const auth=UseAuth()
    if(auth?.user){
        return(<>{props.children}</>)
    }
    else{
  return <Navigate to='/login'/>
    }
}
