import React from 'react'
import { NavLink } from 'react-router-dom'
import './Layout.css'
import SearchBar from './SearchBar'
import Button from './Button'
import { GiHamburgerMenu } from "react-icons/gi";
import { MdCancelPresentation } from "react-icons/md";
import { useState } from 'react'
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible,setVisible]=useState(true);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setVisible(!isVisible);

  }
  return (
  <>
  <div className="Header">
    <div className="header-logo">
      <img src='Images/Logo.png' alt='logo'></img>
    </div><div className="SearchBar">
      <SearchBar/>
    </div>
    <div className={isMenuOpen?"menu-mobile":"menu-web"}>
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
            </div>
            <div className={isVisible?"header-buttons":"not-visible"}> <Button title="Login"/></div>
            <div className="ham-menu">
            <button onClick={toggleMenu}>{isMenuOpen ? <MdCancelPresentation/>:<GiHamburgerMenu />}
          </button>
            </div>
            </div>
  </>
  )
}

export default Header