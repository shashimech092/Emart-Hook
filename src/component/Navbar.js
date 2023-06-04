import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";

const Navbar=()=>{
    return(
        <>
        <nav>
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/post'>Post</Link></li>
        {/* <li><Link to='/'>PostDetails</Link></li> */}
        </nav>
        </>
    )
}
export default Navbar