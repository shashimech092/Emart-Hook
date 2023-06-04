import React from "react";
import './PostDetails.css'


const PostDetails=(props)=>{
    const mynews=props.newsdata.map((data)=>{
        return(
            <div id="news">
                <div key={data.id}>
                <img  id='my' src={data.image} alt="not loading"/>
                <h4>{data.name}</h4>
                </div>
            </div>
        )
    })

    return(
        <>
        <div id="my">{mynews}</div>
            
        </>
    )
}

export default PostDetails