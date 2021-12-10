import React from 'react'
import './styles/App.css'
import { Route, Routes } from 'react-router-dom'
import Landing from './Components/Landing/Landing'
import BurgerShop from './Components/BurgerShop/BurgerShop'
import Nav from './Components/Nav/Nav'
import { useState } from 'react'

const App = () => {
  
  const [cash, setCash] = useState(100)

  const handleExchange = (amt) => {

}

  return (
    <>
    <Nav cash={cash} setCash={setCash}/>
    <main>
      {/* //add route paths */}
      <Routes>
        <Route path="/"
          element={<Landing />}
        />
        <Route path="/burgers"
          element={<BurgerShop />}
        />
        <Route path="/market"/>
      </Routes>
    </main>
    </>
  )}

export default App