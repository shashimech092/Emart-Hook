import { BrowserRouter, Route } from "react-router-dom/cjs/react-router-dom.min"
// import Header from "./Header"
import Navbar from "./Navbar"
import Post from "./Post"
// import About from "./About"
import Home from "./Home"
import View from "./View"
import Fetch from "./Fetch"
// import PostDetails from "./PostDetails"
// import Post from "./Post"


const Routing =()=>{
    return(
        <BrowserRouter>
            <Navbar/>
            {/* <Header/> */}
            {/* <Post/> */}
            <Route exact path='/home' component={Home}></Route>
            <Route exact path='/about' component={Fetch}></Route>
            <Route exact path='/about/:topic' component={View}></Route>
            <Route exact path='/post' component={Post}></Route>
                
        </BrowserRouter>
    )
}

export default Routing