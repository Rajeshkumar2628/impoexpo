import React from 'react'
import {  NavLink, Outlet } from 'react-router-dom'

export default function Product() {
  return (
    <div>
        Product
<nav>
    <NavLink to='new'>New</NavLink>
    <NavLink to='offered'>Offered</NavLink>
</nav>
<Outlet/>

    </div>
  )
}
