import { Container, Form } from "./styles"

import { Link } from "react-router-dom"

import { InputField } from "../../components/InputField"
import { Button } from "../../components/Button"

export function SignUp() {
	return (
		<>
			<Container>
				<img src="./logo.png" alt="Food Explorer logo" />

				<div className="wrapper">
					<Form>
						<h2>Crie sua conta</h2>

						<InputField
							label="Seu nome"
							placeholder="Exemplo: Maria da Silva"
							type="text"
						/>

						<InputField
							label="Email"
							placeholder="Exemplo: exemplo@exemplo.com.br"
							type="email"
						/>

						<InputField
							label="Senha"
							placeholder="No mínimo 6 caracteres"
							type="password"
						/>

						<Button title="Criar conta" />
					</Form>

					<Link to="/">Já tenho uma conta</Link>
				</div>
			</Container>
		</>
	)
}
