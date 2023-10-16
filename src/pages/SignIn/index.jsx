import { Container, Form } from "./styles"
import { useState } from "react"

import { useAuth } from "../../hooks/auth"

import { Link } from "react-router-dom"

import { InputField } from "../../components/InputField"
import { Button } from "../../components/Button"

export function SignIn() {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	let [loading, setLoading] = useState(false)

	const { signIn } = useAuth()

	async function handleSignIn(e) {
		setLoading(true)
		await signIn({ email, password })
		setLoading(false)
	}

	return (
		<>
			<Container>
				<img src="./logo.png" alt="Food Explorer logo" />

				<div className="wrapper">
					<Form>
						<h2>Faça login</h2>

						<InputField
							label="Email"
							placeholder="Exemplo: exemplo@exemplo.com.br"
							type="email"
							onChange={(e) => setEmail(e.target.value)}
						/>

						<InputField
							label="Senha"
							placeholder="No mínimo 6 caracteres"
							type="password"
							onChange={(e) => setPassword(e.target.value)}
						/>

						<Button title="Entrar" loading={loading} onClick={handleSignIn} />
					</Form>

					<Link to="/register">Criar uma conta</Link>
				</div>
			</Container>
		</>
	)
}
