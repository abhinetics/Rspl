import React from 'react'
import './style.css'
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  
  const handleMenuClick = () => {
    setShowMenu(!showMenu);
    console.log(showMenu);
  };
  return (
    <div className='navmain' >
      
        <div className="logo">Rapture</div>
        <AiOutlineMenu className='menu' onClick={handleMenuClick} />
         {/* <li class="icon"> <a href="#"> <RiSettings3Fill /> </a> </li> */}
        <ul className={ showMenu? 'show-menu' : '' } >
            <li className='login' > <a href="#">Login</a> </li>
            <li> <a href="#">Home</a> </li>
            <li> <a href="#">About</a> </li>
            <li> <a href="#">Contact</a> </li>
            <li> <a href="#">Services</a></li>
        </ul>

    </div>
  )
}

export default Navbar