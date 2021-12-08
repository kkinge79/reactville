import React from 'react'
// Components & Assets
import Logo from '../../assets/react-logo.png'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  console.log(Logo)
  return (
    <nav className="navigation-bar">
      <NavLink to="/"><img src="logo192.png"/></NavLink>
      <NavLink to="/burgers">BurgerShop</NavLink> | {" "}
    </nav>
  )
}

export default Nav