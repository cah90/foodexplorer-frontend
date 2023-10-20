import { Container } from "./styles"

import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"
import { BsPencil, BsPencilFill } from "react-icons/bs"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

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

	const handleFavorite = () => {
		setFavorite(!favorite)
	}

	const navigate = useNavigate()

	const redirectToEdit = () => {
		navigate(`edit/${id}`)
	}

	return (
		<Container>
			{isAdmin ? (
				<BsPencil onClick={redirectToEdit} />
			) : favorite ? (
				<AiFillHeart className="favorite-filled" onClick={handleFavorite} />
			) : (
				<AiOutlineHeart onClick={handleFavorite} />
			)}
			<Link to={`details/${id}`}>
				<img src={img} alt="Imagem do prato" />
			</Link>

			<h3>
				<Link to={`details/${id}`}>{name} &gt;</Link>
			</h3>
			<p>{description}</p>
			<span>{price}</span>

			{!isAdmin && (
				<div className="add-items">
					<Counter count={count} increase={increase} decrease={decrease} />
					<Button title={buttonTitle} />
				</div>
			)}
		</Container>
	)
}
