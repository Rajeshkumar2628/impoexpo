import React from 'react'
import { Outlet,  useSearchParams } from 'react-router-dom'


export default function User() {
    const[searchParams,setSearchParams]=useSearchParams()
    const isActive=searchParams.get ('filter')==='active'

    return (
        <div>
            User page
            <Outlet />
            <button onClick={()=>{setSearchParams({'filter':'active'})}}>Active users</button>
           <button onClick={()=>setSearchParams({})}>All users</button>
           {isActive?"Active user only":'All users'}
        </div>
    )
}
