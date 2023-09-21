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

export function Details() {
	const { user } = useAuth()

	let { id } = useParams()

	const [dish, setDish] = useState([])

	useEffect(() => {
		api
			.get(`/dishes/${id}`, { withCredentials: true })
			.then((response) => {
				setDish(response.data)
			})
			.catch((error) => {
				if (error.response) {
					alert(error.response.data.message)
				} else {
					alert("Não há categorias para serem exibidos.")
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

				{dish.map((dish) => (
					<div className="main" key={id}>
						<img
							src={`${api.defaults.baseURL}/files/${dish.image}`}
							alt="Imagem de um prato"
						/>

						<div className="main-info">
							<h1>{dish.dishes_name}</h1>

							<p>{dish.description}</p>

							<div className="tags">
								{dish.ingredients_name.map((ingredient) => (
									<Tag title={ingredient} />
								))}
							</div>

							{user.role === USER_ROLE.ADMIN ? (
								<Link to={"/edit"}>
									<Button title="Editar prato" />
								</Link>
							) : (
								<div className="add-item">
									<Counter />
									<Button
										icon={PiReceiptLight}
										title={`pedir - R$ ${dish.price}`}
									/>
								</div>
							)}
						</div>
					</div>
				))}
			</Wrapper>

			<Footer />
		</Container>
	)
}
