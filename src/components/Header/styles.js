import styled from "styled-components"

export const Container = styled.header`
	background-color: ${({ theme }) => theme.COLORS.DARK_700};

	display: flex;
	justify-content: space-around;
	align-items: center;

	padding: 5.6rem 0 2.4rem;

	width: 100%;

	.menu {
		color: ${({ theme }) => theme.COLORS.LIGHT_100};
		font-size: 2.4rem;
	}

	.exit {
		display: none;
	}

	.input-desktop {
		display: none;
	}

	> img {
		width: 16rem;
	}

	@media (min-width: 1024px) {
		justify-content: center;
		gap: 3.2rem;

		.menu {
			display: none;
		}

		.input-desktop {
			display: initial;
			flex-basis: 40rem;
		}

		.exit {
			display: initial;
			color: ${({ theme }) => theme.COLORS.LIGHT_100};
			font-size: 3.2rem;

			cursor: pointer;
		}
	}
`

export const Nav = styled.nav`
	width: 100%;
	padding: 0 2.8rem;

	animation: nav 1s ease 0s 1 normal forwards;

	@keyframes nav {
		0% {
			opacity: 0;
			transform: translateY(-50px);
		}

		100% {
			opacity: 1;
			transform: translateY(0);
		}
	}

	header {
		background-color: ${({ theme }) => theme.COLORS.DARK_700};

		display: flex;
		align-items: center;
		gap: 1.6rem;
		margin-bottom: 3rem;

		> svg {
			font-size: 2.5rem;
			color: ${({ theme }) => theme.COLORS.LIGHT_100};
		}

		> p {
			color: ${({ theme }) => theme.COLORS.LIGHT_100};
			font-family: var(--ff-roboto);
			font-size: 2rem;
			font-weight: 400;
		}
	}

	> div {
		margin-bottom: 3.6rem;
	}

	a {
		color: ${({ theme }) => theme.COLORS.LIGHT_300};

		font-size: 2rem;
		font-weight: 300;
	}

	@media (min-width: 900px) {
		display: none;
	}
`
