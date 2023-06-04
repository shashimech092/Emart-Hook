import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";

const Home=()=>{
    return(
        <>
        <h2>Home</h2>
        <br/>
        <h4>Javascript</h4>
        <Link to='/about/Javasript?page=1'>Details</Link>
        <h4>NodeJS</h4>
        <Link to='/about/Nodejs?page=2'>Details</Link>
        </>
    )
}
export default Home