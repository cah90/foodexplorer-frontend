import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import { Container, Wrapper, InputFile, Select } from "./styles"

import { FiUpload } from "react-icons/fi"

import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText"
import { Button } from "../../components/Button"
import { InputField } from "../../components/InputField"
import { Textarea } from "../../components/Textarea"
import { IngredientItem } from "../../components/IngredientItem"
import { Footer } from "../../components/Footer"

import { Link, useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"

import { api } from "../../services/api"

export function EditDish() {
	const { id } = useParams()

	const navigate = useNavigate()

	const [categories, setCategories] = useState([])

	const [imageFile, setImageFile] = useState(null)
	const [isImageLoaded, setImageLoaded] = useState(false)

	const [name, setName] = useState("")
	const [category, setCategory] = useState(0)

	const [ingredients, setIngredients] = useState([])
	const [newIngredient, setNewIngredient] = useState("")

	const [price, setPrice] = useState("")
	const [description, setDescription] = useState("")

	function handleAddIngredient() {
		if (!newIngredient) {
			return toast.info("Digite um ingrediente antes de clicar em adicionar.")
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

	function handleDeleteDish() {
		const confirmation = window.confirm("Deseja realmente excluir esse prato?")

		if (confirmation) {
			api
				.delete(`/dishes/${id}`, { withCredentials: true })
				.then(() => {
					toast.success("Prato excluido com sucesso.")
					navigate("/")
				})
				.catch((error) => {
					if (error.response) {
						toast.error(error.response.data.message)
					} else {
						toast.error("Não foi possível excluir o prato.")
					}
				})
		}
	}

	function handleUpdateDish() {
		const formData = new FormData()

		if (!name || !category || !price || !description) {
			return toast.warn("Preencha todos os campos.")
		}

		if (ingredients.length == 0) {
			return toast.warn("Adicione pelo menos 1 ingrediente.")
		}

		if (imageFile) {
			formData.append("image", imageFile)
		}
		formData.append("name", name)
		formData.append("category", category)
		formData.append("ingredients", ingredients)
		formData.append("price", price)
		formData.append("description", description)

		api
			.put(`/dishes/${id}`, formData, { withCredentials: true })
			.then(() => {
				toast.success("Prato editado com sucesso!")
				navigate("/")
			})
			.catch((error) => {
				if (error.response) {
					toast.error(error.response.data.message)
				} else {
					toast.error("Não foi possível editar o prato.")
				}
			})
	}

	useEffect(() => {
		api
			.get(`/dishes/${id}`, { withCredentials: true })
			.then((response) => {
				const { name, category_id, price, description, ingredients, image } =
					response.data

				setName(name)
				setCategory(category_id)
				setPrice(price.toFixed(2))
				setDescription(description)
				setIngredients(ingredients)
				setImageFile(image)
			})
			.catch((error) => {
				if (error.response) {
					toast.error(error.response.data.message)
				} else {
					toast.error("Não há prato para ser exibido.")
				}
			})

		api
			.get("/categories", { withCredentials: true })
			.then((response) => {
				setCategories(response.data)
			})
			.catch((error) => {
				if (error.response) {
					toast.error(error.response.data.message)
				} else {
					toast.error("Não há pratos para serem exibidos.")
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

				<h1>Editar prato</h1>

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
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>

					<div className="categories">
						<label>Categoria</label>
						<Select
							name="category"
							id="category>"
							onChange={(e) => setCategory(e.target.value)}
						>
							{categories.map((categ) => (
								<option
									key={categ.id}
									value={categ.id}
									selected={categ.id == category}
								>
									{categ.name}
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
						defaultValue={price}
						onChange={(e) => setPrice(e.target.value)}
					/>

					<div className="description">
						<label>Descrição</label>
						<Textarea
							placeholder="Fale brevemente sobre o prato, seus ingredientes e composição."
							value={description}
							onChange={(e) => setDescription(e.target.value)}
						></Textarea>
					</div>

					<div className="buttons">
						<Button
							title="Excluir"
							className="btn-delete"
							onClick={handleDeleteDish}
						/>
						<Button
							title="Salvar"
							className="btn-save"
							onClick={handleUpdateDish}
						/>
					</div>
				</div>
			</Wrapper>

			<Footer />
		</Container>
	)
}
