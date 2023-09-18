import { Wrapper, Hero, Section } from "./styles"

import { useAuth } from "../../hooks/auth"

import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Card } from "../../components/Card"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"

export function Home() {
	const { user } = useAuth()

	const isAdmin = user.role == "admin"

	return (
		<>
			<Header />
			<Wrapper>
				<Hero>
					<img
						src="/src/assets/images/image-home.png"
						alt="Imagem de alguns biscoitos coloridos"
					/>

					<div className="hero-info">
						<h2>Sabores inigualáveis</h2>
						<p>Sinta o cuidado do preparo com ingredientes selecionados</p>
					</div>
				</Hero>

				<Section>
					<h2>Refeições</h2>

					<Swiper
						navigation={true}
						modules={[Navigation]}
						slidesPerView={2}
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
						<SwiperSlide>
							<Card
								isAdmin={isAdmin}
								img="./src/assets/images/salada.png"
								name="Salada Ravanello"
								description="Massa fresca com camarões e pesto."
								price="49,90"
								buttonTitle="incluir"
							/>
						</SwiperSlide>
					</Swiper>
				</Section>
			</Wrapper>

			<Footer />
		</>
	)
}
