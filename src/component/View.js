import React from "react"

const View=(props)=>{
    return(
        <>
         <h2>{props.match.params.topic}</h2>
     <p>This is a dummy text for the details</p>
        </>
    )
}


export default View