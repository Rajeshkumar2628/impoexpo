import React from 'react'

export default function Product1(props) {
    if(props.name ==="samsung")
    throw new Error('cannot show this product')
  return (
  <div>{props.name}</div>
  )
}
