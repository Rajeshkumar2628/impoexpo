import React from "react";
import TableData from "./TableData";
export default function  List(){
    let list=[{
        id:'1',
        name:'rithi',
        marks:'100'
    },
    {
    id:'2',
    name:'jeevi',
    marks:'100'
},
]
return(
    <div>
        <table border={"2px"}>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Marks</th></tr>
                {/* {list.map(x=>
                <TableData id={x.id} name={x.name} marks={x.marks}/>)} */}



        </table>
    </div>
)
}