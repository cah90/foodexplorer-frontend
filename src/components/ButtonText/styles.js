import styled from "styled-components"

export const Container = styled.button`
	background: none;
	border: none;

	color: ${({ theme }) => theme.COLORS.LIGHT_300};
	font-family: "Poppins", sans-serif;
	font-size: 2.4rem;
	font-weight: 500;

	&:hover {
		color: ${({ theme }) => theme.COLORS.CAKE_200};
	}

	> span {
		margin-right: 0.8rem;
	}
`
