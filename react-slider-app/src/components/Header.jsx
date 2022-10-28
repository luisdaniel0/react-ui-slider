import React from 'react'
import logo from "../img/valorant-logo.png"
import background from "../img/white.webp"

const Header = () => {
  return (
    <header className="center">
      <div className="parent">
      <img className="logo" src={logo} alt="" />
        <img className="backgroundImg" src={background} alt="" />
        </div>
    </header>
  )
}

export default Header