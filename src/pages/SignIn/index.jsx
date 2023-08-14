import { Container, Form } from "./styles"

import { Link } from "react-router-dom"

import { Field } from "../../components/Field"
import { Button } from "../../components/Button"

export function SignIn() {
	return (
		<>
			<Container>
				<img src="./logo.png" alt="Food Explorer logo" />

				<div className="wrapper">
					<Form>
						<h2>Faça login</h2>

						<Field
							label="Email"
							placeholder="Exemplo: exemplo@exemplo.com.br"
							type="email"
						/>

						<Field
							label="Senha"
							placeholder="No mínimo 6 caracteres"
							type="password"
						/>

						<Button title="Entrar" />
					</Form>

					<Link to="/register">Criar uma conta</Link>
					{/* <a href="/register">Criar uma conta</a> */}
				</div>
			</Container>
		</>
	)
}
