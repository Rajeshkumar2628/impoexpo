import React from 'react'
import UpdatedComponent from './Hoc'

 function Counter5(props) {
  return (
    <div>
        {props.name}
        <button onClick={this.props.handleInc}>{props.count}</button>
    </div>
  )
}export default UpdatedComponent(Counter5)         