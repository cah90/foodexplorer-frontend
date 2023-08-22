import { Container } from "./styles"

import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"

import { Button } from "../Button"

import { useState } from "react"

export function Card() {
	const [count, setCount] = useState(0)
	const [favorite, setFavorite] = useState(false)

	const decrease = () => {
		if (count > 0) {
			setCount(count - 1)
		}
	}

	const increase = () => {
		setCount(count + 1)
	}

	const toggleFavorite = () => {
		setFavorite(!favorite)
	}

	return (
		<Container>
			{favorite ? (
				<AiFillHeart className="favorite-filled" onClick={toggleFavorite} />
			) : (
				<AiOutlineHeart
					className="favorite-unfilled"
					onClick={toggleFavorite}
				/>
			)}
			<img src="./src/assets/images/salada.png" alt="Foto de um prato" />
			<h3>
				<a href="#">Salada Ravanello &gt;</a>
			</h3>
			<p>Massa fresca com camarões e pesto. </p>
			<span>R$ 49,90</span>

			<div className="add-items">
				<div className="counter">
					<button onClick={decrease}> - </button>
					<span> {count} </span>
					<button onClick={increase}> + </button>
				</div>

				<Button title="incluir" />
			</div>
		</Container>
	)
}
