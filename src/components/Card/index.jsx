import { Container } from "./styles"

import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"
import { BsPencil, BsPencilFill } from "react-icons/bs"

import { Button } from "../Button"
import { Counter } from "../Counter"

import { useState } from "react"

export function Card({
	img,
	name,
	id,
	description,
	price,
	isAdmin,
	buttonTitle,
}) {
	const [favorite, setFavorite] = useState(false)

	const toggleFavorite = () => {
		setFavorite(!favorite)
	}

	return (
		<Container>
			{isAdmin ? (
				favorite ? (
					<BsPencilFill onClick={toggleFavorite} />
				) : (
					<BsPencil onClick={toggleFavorite} />
				)
			) : favorite ? (
				<AiFillHeart className="favorite-filled" onClick={toggleFavorite} />
			) : (
				<AiOutlineHeart onClick={toggleFavorite} />
			)}
			<img src={img} alt="Imagem do prato" />
			<h3>
				<a href={`dishes/details/${id}`}>{name} &gt;</a>
			</h3>
			<p>{description}</p>
			<span>R$ {price}</span>

			{!isAdmin && (
				<div className="add-items">
					<Counter />

					<Button title={buttonTitle} />
				</div>
			)}
		</Container>
	)
}
