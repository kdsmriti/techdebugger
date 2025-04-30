import React from 'react'
import { NavLink } from 'react-router-dom'
import './Layout.css'
import SearchBar from './SearchBar'
import Button from './Button'
import { useState } from 'react'
const Header = () => {
  const [isLogin,setLogin]=useState(true);
  const handleLogin=()=>{
    setLogin(true);
  }
  const handlesignUp=()=>{
    setLogin(false);
  }
  
  return (
  <>
  <div className="Header">
    <div className="header-logo">
      <img src='Images/Logo.png' alt='logo'></img>
    </div>
    <div className="SearchBar">
      <SearchBar/>
    </div>
  <ul>
  <li>
            <NavLink to ='/notes'className={({isActive})=>isActive? "active-link":""}>
            Notes
            </NavLink>
            </li>
            <li>
            <NavLink to ='/courses'className={({isActive})=>isActive? "active-link":""}>
            Courses
            </NavLink>
            </li>
            <li>
            <NavLink to ='/scholarships'className={({isActive})=>isActive? "active-link":""}>
            Scholarship
            </NavLink>
            </li>
            <li>
            <NavLink to ='/ourservices'className={({isActive})=>isActive? "active-link":""}>
           Our Services
            </NavLink>
            </li>
            <li>
            <NavLink to ='/gallery'className={({isActive})=>isActive? "active-link":""}>
           Gallery 
            </NavLink>
            </li>
            <li>
            <NavLink to ='/contactus'className={({isActive})=>isActive? "active-link":""}>
          Contact Us
            </NavLink>
            </li>
            </ul>
           <Button title="Login" />
            </div>
          

 
  </>
  )
}

export default Header