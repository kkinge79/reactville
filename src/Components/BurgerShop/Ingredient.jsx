import React from "react"

const Ingredient = (props) => {
	return (
		<li>
				{props.isList ?
				<button onClick={() => props.addToBurger(props.ingredient)}>+</button>
				:
				<button onClick={() => props.removeFromBurger(props.idx)}>X</button>}
		</li>
	)
}
export default Ingredient