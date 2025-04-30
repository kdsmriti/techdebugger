import React from 'react'
import { FaSearch } from "react-icons/fa";
import  './SearchBar.css'
import { useState } from 'react';

const SearchBar = () => {
    const[input,setInput]=useState("");

  return (
    <>
    <div className='input-wrapper '>
    <input placeholder='Find Courses Here..'
    value={input}
    onChange={(e)=>setInput(e.target.value)}></input>
    <FaSearch id='search-icon'/>
    </div>
    </>
 

  )
}

export default SearchBar