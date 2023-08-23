import { Container } from "./styles"

import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"

import { Button } from "../Button"
import { Counter } from "../Counter"

import { useState } from "react"

export function Card() {
	const [favorite, setFavorite] = useState(false)

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
				<Counter />

				<Button title="incluir" />
			</div>
		</Container>
	)
}
