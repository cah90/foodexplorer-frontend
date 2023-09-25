import { Container, Wrapper, InputFile, Select } from "./styles"

import { FiUpload } from "react-icons/fi"

import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText"
import { Button } from "../../components/Button"
import { InputField } from "../../components/InputField"
import { Textarea } from "../../components/Textarea"
import { IngredientItem } from "../../components/IngredientItem"
import { Footer } from "../../components/Footer"

import { Link, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"

import { api } from "../../services/api"

export function NewDish() {
	const navigate = useNavigate()

	const [imageFile, setImageFile] = useState(null)
	const [isImageLoaded, setImageLoaded] = useState(false)

	const [name, setName] = useState("")
	const [categories, setCategories] = useState([])
	const [category, setCategory] = useState(0)

	const [ingredients, setIngredients] = useState([])
	const [newIngredient, setNewIngredient] = useState("")

	const [price, setPrice] = useState("")
	const [description, setDescription] = useState("")

	function handleAddIngredient() {
		if (!newIngredient) {
			return alert("Digite um ingrediente antes de clicar em adicionar.")
		}
		setIngredients((prevState) => [...prevState, newIngredient])

		setNewIngredient("")
	}

	function handleRemoveIngredient(deleted) {
		setIngredients((prevState) =>
			prevState.filter((ingredient) => ingredient !== deleted)
		)
	}

	function handleSaveImage(event) {
		const file = event.target.files[0]

		setImageFile(file)
		setImageLoaded(true)
	}

	async function handleNewDish() {
		const formData = new FormData()

		formData.append("image", imageFile)
		formData.append("name", name)
		formData.append("category", category)
		formData.append("ingredients", ingredients)
		formData.append("price", price)
		formData.append("description", description)

		// Used to iterate over the formData
		// for (const [key, value] of formData.entries()) {
		// 	console.log(`${key}: ${value}`)
		// }

		await api
			.post("/dishes", formData, { withCredentials: true })
			.then(() => {
				alert("Prato adicionado com sucesso!")
				navigate("/")
			})
			.catch((error) => {
				if (error.response) {
					alert(error.response.data.message)
				} else {
					alert("Houve um erro ao criar o prato.")
				}
			})
	}

	useEffect(() => {
		api
			.get("/categories", { withCredentials: true })
			.then((response) => {
				setCategories(response.data)
			})
			.catch((error) => {
				if (error.response) {
					alert(error.response.data.message)
				} else {
					alert("Não há pratos para serem exibidos.")
				}
			})
	}, [])

	return (
		<Container>
			<Header />

			<Wrapper>
				<Link to={"/"}>
					<ButtonText title="voltar" />
				</Link>

				<h1>Novo prato</h1>
				<div className="main">
					<InputFile isImageLoaded={isImageLoaded}>
						<label>
							Imagem do prato
							<div className="file">
								<FiUpload />

								<span>
									{isImageLoaded ? "Imagem carregada" : "Selecione a imagem"}
								</span>

								<input
									type="file"
									name="image"
									id="image"
									onChange={handleSaveImage}
								/>
							</div>
						</label>
					</InputFile>

					<InputField
						label="Nome"
						placeholder="Ex.: Salada Ceasar"
						type="text"
						className="name"
						onChange={(e) => setName(e.target.value)}
					/>

					<div className="categories">
						<label>Categoria</label>
						<Select
							name="category"
							id="category"
							onChange={(e) => setCategory(e.target.value)}
						>
							{categories.map((category) => (
								<option key={category.id} value={category.id}>
									{category.name}
								</option>
							))}
						</Select>
					</div>

					<div className="ingredients">
						<label>Ingredientes</label>
						<div className="ingredients-items">
							<IngredientItem
								$isNew
								placeholder="Adicionar"
								value={newIngredient}
								onChange={(e) => setNewIngredient(e.target.value)}
								onClick={handleAddIngredient}
							/>
							{ingredients.map((ingredient, index) => (
								<IngredientItem
									key={String(index)}
									value={ingredient}
									on
									onClick={() => handleRemoveIngredient(ingredient)}
								/>
							))}
						</div>
					</div>

					<InputField
						label="Preço"
						placeholder="R$ 00,00"
						type="number"
						className="price"
						onChange={(e) => setPrice(e.target.value)}
					/>

					<div className="description">
						<label>Descrição</label>
						<Textarea
							onChange={(e) => setDescription(e.target.value)}
							placeholder="Fale brevemente sobre o prato, seus ingredientes e composição."
						></Textarea>
					</div>
					<Button title="Salvar" className="button" onClick={handleNewDish} />
				</div>
			</Wrapper>

			<Footer />
		</Container>
	)
}
