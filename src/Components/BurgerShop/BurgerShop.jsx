import React from 'react'
import '../../styles/burger.css'
import { ingredients } from '../../data/burger-data'
import IngredientList from './IngredientList'
import BurgerStack  from './BurgerStack'
import { useState } from 'react'


const BurgerShop = () => {
  console.log(ingredients)
  
  const [stack, setStack] = useState([])

  const addToBurger = (Ingredient) => {
    return(
      setStack([...stack, Ingredient])
    )
  }

  const removeFromBurger = (idx) => {
    return(
      setStack(stack.filter((i) => i !== idx))
    )
  }

  return (
    <div className="burger-shop">
      <nav>
        <h1>Burger Shop</h1>
        <button onClick={() => setStack([])}>Clear Order</button>
      </nav>
      <section>
        <IngredientList 
          ingredients={ingredients}
          stack={stack}
          addToBurger={addToBurger}
        />
        <BurgerStack 
          ingredients={stack}
          removeFromBurger={removeFromBurger}
        />
      </section>
    </div>
  )
}

export default BurgerShop