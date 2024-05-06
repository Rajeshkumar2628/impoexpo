import React from 'react'

function Button(props) {
    console.log(`Button for ${props.name}`)
  return (
    <div>
 <button onClick={props.handleClick}>click here</button>


    </div>
  )
}

export default Button