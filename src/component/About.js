import React from "react";
// import { Link } from "react-router-dom/cjs/react-router-dom";

const About=(props)=>{
    // console.log(props)
    const mydata=({fetchData})=>{
        if(fetchData!==''){
           return fetchData.map((data)=>{
                return (
                    <div key={data.state_id}>
                <h2>{data.state}</h2>
                </div>)
            })
        }
    }
    return(
        <>
     <div>{mydata(props)}</div>
        </>
    )
}
export default About