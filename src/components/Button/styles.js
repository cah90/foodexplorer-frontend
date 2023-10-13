import styled from "styled-components"

export const Container = styled.button`
	/* width: 100%; */
	padding: 1.2rem 2.4rem;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 0.8rem;

	background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
	border-radius: 0.5rem;
	border: none;

	font-family: var(--ff-poppins);
	font-size: 1.4rem;
	font-weight: 500;
	line-height: 2.4rem;
	color: ${({ theme }) => theme.COLORS.LIGHT_100};

	outline: none;

	cursor: pointer;
`
