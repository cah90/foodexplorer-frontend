import { Container } from "./styles"

import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"
import { BsPencil, BsPencilFill } from "react-icons/bs"
import { useState } from "react"
import { Link } from "react-router-dom"

import { Button } from "../Button"
import { Counter } from "../Counter"

import { useCounter } from "../../hooks/useCounter"

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
	const { count, increase, decrease } = useCounter(1)

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
				<Link to={`details/${id}`}>{name} &gt;</Link>
				{/* <a href={`details/${id}`}>{name} &gt;</a> */}
			</h3>
			<p>{description}</p>
			<span>R$ {price}</span>

			{!isAdmin && (
				<div className="add-items">
					<Counter count={count} increase={increase} decrease={decrease} />
					<Button title={buttonTitle} />
				</div>
			)}
		</Container>
	)
}
