import React from 'react'
import { HiOutlineMail } from 'react-icons/hi';
import "./style.css"

const Navbar = () => {
  return (
    <div className='navbar-container'>
        <div className='logo-container'>
           <img className='logo' src='https://raisingsuperstars.com/hosted/images/31/d5920ad6b74537ad5acdda99b65577/ST-LOGO.png' alt='logo'/>
        </div>
        <div className='email'>
        <HiOutlineMail style={{marginRight: "7px", marginBottom: "-10px"}} size={28}/>
          support@raisingsuperstars.in
        </div>
    </div>
  )
}

export default Navbar