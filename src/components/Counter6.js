import React from 'react'
import UpdatedComponent from './Hoc'

 function Counter6(props) {
  return (
    <div>
        <h1 onMouseOver={props.handleInc}>{props.count}</h1>
    </div>
  )
}export default UpdatedComponent(Counter6)
