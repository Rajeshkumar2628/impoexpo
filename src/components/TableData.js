import React from "react";
export default function TableData(props){
    return(
        <tr>
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>{props.job}</td>
        </tr>
        
    )
}