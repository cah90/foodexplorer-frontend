import styled from "styled-components"

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
`

export const Wrapper = styled.div`
	padding: 1.2rem 2.8rem;

	button {
		font-size: 1.6rem;
	}

	.main {
		h1 {
			color: ${({ theme }) => theme.COLORS.LIGHT_300};
			font-size: 2.4rem;

			padding: 2.4rem 0;
		}

		label {
			font-family: var(--ff-roboto);
			font-size: 1.6rem;
			font-weight: 400;
			line-height: 100%;
			color: ${({ theme }) => theme.COLORS.LIGHT_400};
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
