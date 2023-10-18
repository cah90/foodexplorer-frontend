import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import { Container, Wrapper } from "./styles"

import { PiReceiptLight } from "react-icons/pi"

import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText"
import { Counter } from "../../components/Counter"
import { Tag } from "../../components/Tag"
import { Button } from "../../components/Button"
import { Footer } from "../../components/Footer"

import { Link, useParams } from "react-router-dom"
import { useState, useEffect } from "react"

import { useAuth } from "../../hooks/auth"
import { USER_ROLE } from "../../utils/roles"
import { api } from "../../services/api"

import { useCounter } from "../../hooks/useCounter"

export function Details() {
	const { user } = useAuth()

	let { id } = useParams()
	const { count, increase, decrease } = useCounter(1)

	const [dish, setDish] = useState({})

	useEffect(() => {
		api
			.get(`/dishes/${id}`, { withCredentials: true })
			.then((response) => {
				setDish(response.data)
			})
			.catch((error) => {
				if (error.response) {
					toast.error("Não há prato com esse ID")
					console.log(error.response.data.message)
				} else {
					toast.error("Não há prato para ser exibido.")
				}
			})
	}, [])

	return (
		<Container>
			<Header />

			<Wrapper>
				<Link to={"/"}>
					<ButtonText title="voltar" />
				</Link>
				{dish.name && (
					<div className="main">
						<img
							src={`${api.defaults.baseURL}/files/${dish.image}`}
							alt="Imagem de um prato"
						/>

						<div className="main-info">
							<h1>{dish.name}</h1>

							<p>{dish.description}</p>

							<div className="tags">
								{dish.ingredients.map((ingredient, index) => (
									<Tag key={String(index)} title={ingredient} />
								))}
							</div>

							{user.role === USER_ROLE.ADMIN ? (
								<Link to={`/edit/${id}`}>
									<Button title="Editar prato" className="edit-btn" />
								</Link>
							) : (
								<div className="add-item">
									<Counter
										count={count}
										increase={increase}
										decrease={decrease}
									/>
									<Button
										icon={PiReceiptLight}
										title={`pedir - R$ ${count * dish.price}`}
									/>
								</div>
							)}
						</div>
					</div>
				)}
			</Wrapper>

			<Footer />
		</Container>
	)
}
