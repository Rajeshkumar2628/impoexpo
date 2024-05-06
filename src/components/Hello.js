import React from "react";
function Hello(props){

    return(      
<>
<h1>welcome {props.name} with age {props.age}  
</h1>
{props.children}
</>
    )
}
export default Hello