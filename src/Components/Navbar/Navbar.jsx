import React from 'react'
import './Navbar.css'
import Plogo from '../../assets/Plogo.png'

function Navbar() {
  return (
    <nav className='navbar'>
      <img src={Plogo} alt="Plogo" className='logo' />
      <div className="desktopMenu">
        
      </div>
       <button className='desktopMenuBtn'>
        <img src="" alt=""  className='desktopMenuImg'/>
        Contact Me
       </button>
    </nav>
  )
}

export default Navbar
