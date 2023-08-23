import { Wrapper, Hero, Section } from "./styles"

import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Card } from "../../components/Card"

export function Home() {
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

					<div className="cards">
						<Card />
					</div>
				</Section>
			</Wrapper>

			<Footer />
		</>
	)
}
