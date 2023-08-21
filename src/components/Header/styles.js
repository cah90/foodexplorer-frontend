import styled from "styled-components"

import { motion } from "framer-motion"

export const ButtonCart = styled.div`
	display: flex;
	align-items: center;

	padding: 0.4rem;

	position: relative;

	.counter {
		background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
		width: 2rem;
		border-radius: 100%;

		font-size: 1.4rem;
		font-weight: 500;
		line-height: 2.4rem;
		color: ${({ theme }) => theme.COLORS.LIGHT_100};

		text-align: center;

		position: absolute;
		top: 0;
		right: 0;
	}

	> svg {
		color: ${({ theme }) => theme.COLORS.LIGHT_100};
		font-size: 3.2rem;
	}
`

export const Container = styled.header`
	position: relative;
	display: flex;
	gap: 1.6rem;
	align-items: center;
	justify-content: space-evenly;

	padding: 5.6rem 2.8rem 2.4rem;

	background-color: ${({ theme }) => theme.COLORS.DARK_600};

	> svg {
		color: ${({ theme }) => theme.COLORS.LIGHT_100};
		font-size: 2.4rem;
	}

	> img {
		height: 2.5rem;
	}

	.exit {
		display: none;
	}

	.input-desktop {
		display: none;
	}

	.button-desktop {
		display: none;
	}

	@media (min-width: 1024px) {
		gap: 3.2rem;
		padding: 2.4rem 12.3rem;

		.menu {
			display: none;
		}

		.exit {
			display: initial;
			min-width: 3.2rem;

			cursor: pointer;
		}

		.exit:hover {
			color: ${({ theme }) => theme.COLORS.CAKE_200};
		}

		.input-desktop {
			display: initial;
			width: 100%;
			/* min-width: 58rem; */
		}

		.button-mobile {
			display: none;
		}

		.button-desktop {
			display: initial;
			width: 21.6rem;
		}
	}
`

export const NavMobile = styled(motion.div)`
	width: 100%;
	position: absolute;
	top: -170px;

	padding: 5.6rem 2.8rem 2.8rem;

	background-color: ${({ theme }) => theme.COLORS.DARK_700};

	header {
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

		border-bottom: ${({ theme }) => theme.COLORS.DARK_1000};

		display: inline-block;
		width: 100%;

		padding: 1rem 0;
	}
`
