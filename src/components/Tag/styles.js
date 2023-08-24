import { styled } from "styled-components"

export const Container = styled.span`
	font-size: 1.4rem;
	font-weight: 500;
	text-align: center;

	padding: 0.4rem 0.8rem;
	border-radius: 0.5rem;
	margin-right: 0.8rem;

	color: ${({ theme }) => theme.COLORS.LIGHT_100};
	background-color: ${({ theme }) => theme.COLORS.DARK_1000};
`
