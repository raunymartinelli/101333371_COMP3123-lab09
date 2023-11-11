import React from "react";

function Name(props){
    return(

        <>
        <h4 style={{color: 'black', margin: 0, lineHeight: 2}}>{props.first_name} {props.last_name}</h4>
        <h3 style={{color: 'black', margin: 0, lineHeight: 2}}>{props.std_id}</h3>
        </>
    )

}

export default Name