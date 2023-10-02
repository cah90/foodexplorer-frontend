import { Wrapper, Hero, Section } from "./styles"
import HomeImg from "../../assets/images/image-home.png"

import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"

import { useAuth } from "../../hooks/auth"

import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Card } from "../../components/Card"

import { api } from "../../services/api"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"

export function Home() {
	const { user } = useAuth()
	const isAdmin = user.role == "admin"

	const { search } = useLocation()
	const searchParams = new URLSearchParams(search)
	const queryValue = searchParams.get("query")

	const [categories, setCategories] = useState([])
	const [dishes, setDishes] = useState([])

	useEffect(() => {
		if (!queryValue) {
			api
				.get("/categories", { withCredentials: true })
				.then((response) => {
					setCategories(response.data)
				})
				.catch((error) => {
					if (error.response) {
						alert(error.response.data.message)
					} else {
						alert("Não há categorias para serem exibidos.")
					}
				})

			api
				.get("/dishes", { withCredentials: true })
				.then((response) => {
					setDishes(response.data)
				})
				.catch((error) => {
					if (error.response) {
						alert(error.response.data.message)
					} else {
						alert("Não há pratos para serem exibidos.")
					}
				})
		} else {
			api.get(`/search?query=${queryValue}`).then((response) => {
				setDishes(response.data)
			})
		}
	}, [queryValue])

	useEffect(() => {
		let tempCategories = []

		dishes.forEach((dish) => {
			const checkIfCategoryExist = tempCategories.some((category) => {
				return category.id === dish.category_id
			})

			if (!checkIfCategoryExist || !tempCategories.length) {
				tempCategories.push({
					id: dish.category_id,
					name: dish.category_name,
				})
			}
		})

		setCategories(tempCategories)
	}, [dishes])

	return (
		<>
			<Header />
			<Wrapper>
				<Hero>
					<img src={HomeImg} alt="Imagem de alguns biscoitos coloridos" />

					<div className="hero-info">
						<h2>Sabores inigualáveis</h2>
						<p>Sinta o cuidado do preparo com ingredientes selecionados</p>
					</div>
				</Hero>

				{categories?.map((category) => (
					<Section key={category.id}>
						<h2>{category.name}</h2>

						<Swiper
							key={category.id}
							navigation={true}
							modules={[Navigation]}
							slidesPerView={3}
							breakpoints={{
								768: {
									slidesPerView: 3,
								},
								1024: {
									slidesPerView: 3,
								},
							}}
							className="cards"
						>
							{dishes
								?.filter((dish) => category.id === dish.category_id)
								.map((filteredDish, index) => (
									<SwiperSlide key={String(index)}>
										<Card
											isAdmin={isAdmin}
											id={filteredDish.dishes_id}
											img={`${api.defaults.baseURL}/files/${filteredDish.image}`}
											name={filteredDish.dishes_name}
											description={filteredDish.description}
											price={filteredDish.price}
											buttonTitle="incluir"
										/>
									</SwiperSlide>
								))}
						</Swiper>
					</Section>
				))}
			</Wrapper>

			<Footer />
		</>
	)
}
