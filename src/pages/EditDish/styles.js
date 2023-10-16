import styled from "styled-components"

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
`

export const Wrapper = styled.div`
	max-width: 159rem;
	margin: 0 auto;

	padding: 1.2rem 2.8rem;

	margin-bottom: 5.3rem;

	h1 {
		color: ${({ theme }) => theme.COLORS.LIGHT_300};
		font-size: 2.4rem;

		padding: 2.4rem 0;
	}

	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	.main {
		label {
			font-family: var(--ff-roboto);
			font-size: 1.6rem;
			font-weight: 400;
			line-height: 100%;
			color: ${({ theme }) => theme.COLORS.LIGHT_400};
		}

		.ingredients {
			margin-bottom: 2.4rem;
		}

		.ingredients-items {
			display: flex;
			flex-wrap: wrap;
			padding: 1rem;
			gap: 1.6rem;

			background-color: ${({ theme }) => theme.COLORS.DARK_800};
			border-radius: 0.8rem;
		}

		.buttons {
			display: flex;
			gap: 3.2rem;
		}

		.btn-delete {
			background-color: ${({ theme }) => theme.COLORS.DARK_800};
		}

		.btn-delete,
		.btn-save {
			width: 100%;
		}
	}

	@media (min-width: 1024px) {
		max-width: 112rem;
		.main {
			display: grid;
			gap: 3.2rem;
			grid-template-columns: repeat(3, 1fr);
			grid-template-rows: auto;
			grid-template-areas:
				"imagem name categories"
				"ingredients ingredients price"
				"description description description"
				". . buttons";
		}

		.file {
			grid-area: imagem;
		}

		.name {
			grid-area: name;
		}

		.categories {
			grid-area: categories;
		}

		.ingredients {
			grid-area: ingredients;
		}

		.price {
			grid-area: price;
		}

		.description {
			grid-area: description;
		}

		.buttons {
			grid-area: buttons;
		}
	}
`

export const InputFile = styled.div`
	.file {
		width: 100%;

		margin-bottom: 2.4rem;
		padding: 1.2rem 1.4rem;

		border-radius: 0.8rem;
		border: none;
		background-color: ${({ theme }) => theme.COLORS.DARK_800};
		outline: none;

		font-family: var(--ff-roboto);
		font-size: 1.6rem;
		font-weight: 400;
		line-height: 100%;
		color: ${({ theme }) => theme.COLORS.LIGHT_100};

		display: flex;
		align-items: center;
		gap: 1rem;

		cursor: pointer;

		svg {
			font-size: 2rem;
		}

		span,
		svg {
			color: ${(props) => (props.isImageLoaded ? "#008000" : "#fff")};
		}

		input {
			display: none;
		}
	}
`
export const Select = styled.select`
	width: 100%;

	background-color: ${({ theme }) => theme.COLORS.DARK_800};
	color: ${({ theme }) => theme.COLORS.LIGHT_400};
	font-family: var(--ff-roboto);
	font-size: 1.6rem;
	font-weight: 400;

	padding: 1.4rem;
	border-radius: 0.8rem;
	border: none;

	margin-bottom: 2.4rem;
`
