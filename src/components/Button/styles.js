import styled from "styled-components"

export const Container = styled.div`
	width: 100%;
	padding: 1.2rem 3.2rem;
	justify-content: center;
	align-items: center;

	background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
	border-radius: 0.5rem;

	font-size: 1.4rem;
	font-weight: 500;
	line-height: 2.4rem;
	color: ${({ theme }) => theme.COLORS.LIGHT_100};

	cursor: pointer;
`
