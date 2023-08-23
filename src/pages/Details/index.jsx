import { Wrapper } from "./styles"

import { PiReceiptLight } from "react-icons/pi"

import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText"
import { Counter } from "../../components/Counter"
import { Button } from "../../components/Button"
import { Footer } from "../../components/Footer"

export function Details() {
	return (
		<>
			<Header />

			<Wrapper>
				<ButtonText title="voltar" />

				<div className="main">
					<img
						src="../src/assets/images/salada.png"
						alt="Imagem de uma salada"
					/>

					<h1>Salada Ravanello</h1>

					<p>
						Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.
					</p>
				</div>

				<div className="tags"></div>

				<div className="add-item">
					<Counter />

					<Button icon={PiReceiptLight} title={`pedir - R$ 25,00`} />
				</div>
			</Wrapper>

			<Footer />
		</>
	)
}
