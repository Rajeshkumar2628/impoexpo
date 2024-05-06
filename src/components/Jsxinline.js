import React from 'react';
import './style.css'
export default function Jsx(props){
    let style=props.admin?'primary':'secondary'

return(
    <div>
      <h1 className={style}>Welcome</h1>
    </div>
)
}
