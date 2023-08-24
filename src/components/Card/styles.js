import { styled } from "styled-components"

export const Container = styled.div`
	max-width: 21rem;
	padding: 2.4rem;

	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1.5rem;

	background-color: ${({ theme }) => theme.COLORS.DARK_200};
	border: 0.1rem solid ${({ theme }) => theme.COLORS.DARK_300};
	border-radius: 0.8rem;

	position: relative;

	.favorite-filled {
		color: ${({ theme }) => theme.COLORS.TOMATO_100};
	}

	.add-items {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1.6rem;

		width: 100%;
	}

	> svg {
		position: absolute;
		top: 1.6rem;
		right: 1.6rem;

		cursor: pointer;

		font-size: 2.4rem;
		color: ${({ theme }) => theme.COLORS.LIGHT_300};
	}

	> img {
		width: 8.8rem;
	}

	> p {
		display: none;
	}

	> h3,
	a {
		color: ${({ theme }) => theme.COLORS.LIGHT_300};
		font-size: 1.4rem;
		font-weight: 500;

		text-align: center;
	}

	> span {
		font-family: "Roboto", sans-serif;
		font-size: 1.6rem;
		font-weight: 400;
		line-height: 100%;
		color: ${({ theme }) => theme.COLORS.CAKE_200};
	}

	@media (min-width: 1024px) {
		max-width: 30.4rem;
		padding: 2.4rem;

		.add-items {
			display: flex;
			flex-direction: row;
			justify-content: center;
		}

		> h3,
		a {
			font-size: 2.4rem;
		}

		> h3,
		a:hover {
			color: ${({ theme }) => theme.COLORS.CAKE_200};
		}

		> p {
			display: inline-block;

			font-family: "Roboto", sans-serif;
			font-size: 1.4rem;
			font-weight: 400;
			color: ${({ theme }) => theme.COLORS.LIGHT_400};
		}

		> span {
			font-size: 3.2rem;

			margin: 1.5rem 0;
		}

		div[type="button"] {
			max-width: 9rem;
		}
	}
`
