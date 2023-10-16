import styled from "styled-components"

export const Container = styled.textarea`
	width: 100%;
	height: 15rem;

	padding: 1.4rem;
	margin-bottom: 2.4rem;

	font-family: var(--ff-roboto);
	font-size: 1.6rem;
	font-weight: 400;
	line-height: 2rem;

	background-color: ${({ theme }) => theme.COLORS.DARK_800};
	color: ${({ theme }) => theme.COLORS.LIGHT_100};
	border-radius: 0.8rem;
	border: none;

	&::placeholder {
		color: ${({ theme }) => theme.COLORS.LIGHT_500};
	}
`
