import { Container, Wrapper } from "./styles"

import { Header } from "../../components/Header"

export function Home() {
	return (
		<Container>
			<Header />

			<Wrapper>
				<div className="hero">
					<img
						src="/src/assets/images/image-home.png"
						alt="Imagem de alguns biscoitos coloridos"
					/>

					<div className="hero-info">
						<h2>Sabores inigualáveis</h2>
						<p>Sinta o cuidado do preparo com ingredientes selecionados</p>
					</div>
				</div>
			</Wrapper>
		</Container>
	)
}
