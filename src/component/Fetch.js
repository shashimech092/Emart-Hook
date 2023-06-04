import React from "react";
import { Component } from "react";
import About from "./About";



const url='http://3.17.216.66:4000/location'
class Fetch extends Component{
    constructor(){
        super()
        this.state={
                find: ''
        }
    }

    componentDidMount(){
        fetch(url, {method:'GET'})
        .then((res)=>res.json())
        .then((data)=>{
            this.setState({find:data})
        })
    }

    render(){
        return(
            <>
            <About fetchData={this.state.find}/>
            </>
        )
    }
}

export default Fetch