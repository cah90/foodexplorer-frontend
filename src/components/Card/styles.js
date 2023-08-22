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

	> svg {
		position: absolute;
		top: 1.6rem;
		right: 1.6rem;

		cursor: pointer;

		font-size: 2.4rem;
		color: ${({ theme }) => theme.COLORS.LIGHT_300};
	}

	.favorite-filled {
		color: ${({ theme }) => theme.COLORS.TOMATO_100};
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
	}

	> span {
		font-family: "Roboto", sans-serif;
		font-size: 1.6rem;
		font-weight: 400;
		line-height: 100%;
		color: ${({ theme }) => theme.COLORS.CAKE_200};
	}

	.add-items {
		display: flex;
		flex-direction: column;
		align-items: center;

		width: 100%;

		.counter {
			color: ${({ theme }) => theme.COLORS.LIGHT_300};

			display: flex;
			align-items: center;
			gap: 1.4rem;

			font-size: 1.6rem;

			margin-bottom: 1.6rem;

			button {
				background: none;
				border: none;
				color: ${({ theme }) => theme.COLORS.LIGHT_300};
				font-size: 2.4rem;
			}
		}
	}

	@media (min-width: 1024px) {
		max-width: 30rem;
		padding: 2.4rem;

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
		}

		.add-items {
			display: flex;
			flex-direction: row;
			justify-content: center;
			gap: 1.6rem;

			.counter {
				font-size: 2rem;
				margin: 2.4rem 0;
			}

			> div[type="button"] {
				max-width: 9.2rem;
			}
		}
	}
`
