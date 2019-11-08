import React from 'react'

import './style.css'
import logo from '../../assets/logo.svg'
import profile from '../../assets/profile.png'

function Navbar() {
  return (
    <nav>
      <img src={logo} alt="Facebook"/>
      <div>
        <p>Meu perfil</p>
        <img id="profile" src={profile} alt="Profile"/>
      </div>
    </nav>
  )
}

export default Navbar
