
import React, { useState } from "react";
// import { Component } from "react";
import JSON from './db.json'
import PostDetails from "./PostDetails";
import Header from "./Header";

// class Post extends Component{
const Post=()=>{
const [news]=useState(JSON)
const [filterdata, setFilterdata]=useState(JSON)

    // constructor(){
    //     super()
    //     this.state={
    //         news: JSON,
    //         filterdata: JSON
    //     }
    // }

   let handleFilter=(keyword)=>{
        let output = news.filter((data)=>{
            return data.name.toLowerCase().indexOf(keyword.toLowerCase())>-1
        })
        setFilterdata(output)
    }
    // render(){
        return(
            <>
            <Header newssearch={(data)=>{handleFilter(data)}}/>
            <PostDetails newsdata={filterdata}/>
            </>
        )
    // }
}

export default Post