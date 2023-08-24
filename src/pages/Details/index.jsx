import { Container, Wrapper } from "./styles"

import { PiReceiptLight } from "react-icons/pi"

import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText"
import { Counter } from "../../components/Counter"
import { Tag } from "../../components/Tag"
import { Button } from "../../components/Button"
import { Footer } from "../../components/Footer"

export function Details() {
	return (
		<Container>
			<Header />

			<Wrapper>
				<ButtonText title="voltar" />

				<div className="main">
					<img
						src="../src/assets/images/salada.png"
						alt="Imagem de uma salada"
					/>

					<div className="main-info">
						<h1>Salada Ravanello</h1>

						<p>
							Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.
						</p>

						<div className="tags">
							<Tag title={"alface"} />
							<Tag title={"cebola"} />
						</div>

						<div className="add-item">
							<Counter />

							<Button icon={PiReceiptLight} title={`pedir - R$ 25,00`} />
						</div>
					</div>
				</div>
			</Wrapper>

			<Footer />
		</Container>
	)
}
