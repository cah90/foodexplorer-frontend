import { Container, Form } from "./styles"

import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"

import { api } from "../../services/api"

import { InputField } from "../../components/InputField"
import { Button } from "../../components/Button"

export function SignUp() {
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const navigate = useNavigate()

	function handleSignUp() {
		if (!name || !email || !password) {
			return alert("Preencha todos os campos!")
		}

		api
			.post("/users", { name, email, password })
			.then(() => {
				alert("Usuário cadastrado com sucesso!")
				navigate("/")
			})
			.catch((error) => {
				if (error.response) {
					alert(error.response.data.message)
				} else {
					alert("Não foi possível cadastrar.")
				}
			})
	}

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
							onChange={(e) => setName(e.target.value)}
						/>

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

						<Button title="Criar conta" onClick={handleSignUp} />
					</Form>

					<Link to="/">Já tenho uma conta</Link>
				</div>
			</Container>
		</>
	)
}
