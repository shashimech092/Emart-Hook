import React, { Component } from "react";
// import About from "./About";

class Header extends Component{
    // debugg
    constructor(){
        super()
        this.state={
            title:'React App',
            keyword: 'User input text here',
            find: ''
        }
    }
    handleChange(event){
        console.log(event.target.value)
        this.setState({keyword:event.target.value?event.target.value:'user text'})
        this.props.newssearch(event.target.value)
    }
    
    render(){
        return(
            <>
<center style={{backgroundColor:"teal"}}>
        <h2>{this.state.title}</h2>
        <input  onChange={this.handleChange.bind(this)}/>
        <div>{this.state.keyword}</div>
        {/* <div>{this.handleFetch}</div> */}
        
</center>

</>
        )
    }
}

export default Header