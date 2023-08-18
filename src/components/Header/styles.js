import styled from "styled-components"

import { motion } from "framer-motion"

export const Container = styled.header`
	position: relative;
	display: flex;
	gap: 1.6rem;
	align-items: center;
	justify-content: space-evenly;

	padding: 5.6rem 2.8rem 2.4rem;

	> svg {
		color: ${({ theme }) => theme.COLORS.LIGHT_100};
		font-size: 2.4rem;
	}

	> img {
		height: 2.5rem;
	}
`

export const ButtonCartMobile = styled.div`
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

export const NavMobile = styled(motion.div)`
	/* background-color: ${({ theme }) => theme.COLORS.DARK_700}; */
	width: 100%;
	position: absolute;
	top: 5.6rem;

	/* animation: nav 1s ease 0s 1 normal forwards;

	@keyframes nav {
		0% {
			opacity: 0;
			transform: translateY(-50px);
		}

		100% {
			opacity: 1;
			transform: translateY(0);
		}
	} */

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
	}
`
