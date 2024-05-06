import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav1() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" to="/">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Truck" >TruckType</NavLink>
              </li>
             
              <li className="nav-item">
                <NavLink className="nav-link" to="/user" >User</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to='/signup' >SignUp</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to='/login' >Login</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact" >Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
