import React from 'react'
// Components & Assets
import Logo from '../../assets/react-logo.png'
import { NavLink } from 'react-router-dom'
import Wallet from './Wallet'

const Nav = () => {
  console.log(Logo)
  return (
    <nav className="navigation-bar">
      <NavLink to="/"><img src="logo192.png" alt="logo"/></NavLink>
      <NavLink to="/burgers">BurgerShop</NavLink> | {" "}
      <NavLink to="/market">Super Market</NavLink>
      <Wallet />
    </nav>
  )
}

export default Nav