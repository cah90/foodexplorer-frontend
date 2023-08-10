import { Container } from "./styles"

import { Field } from "../../components/Field"

export function SignIn() {
	return (
		<>
			<Container>
				<img src="./logo.png" alt="Food Explorer logo" />

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
			</Container>
		</>
	)
}
