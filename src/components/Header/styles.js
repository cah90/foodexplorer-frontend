import styled from "styled-components"

export const Container = styled.header`
	background-color: ${({ theme }) => theme.COLORS.DARK_700};

	display: flex;
	justify-content: space-around;
	align-items: center;

	padding: 5.6rem 0 2.4rem;

	width: 100%;

	> svg {
		color: ${({ theme }) => theme.COLORS.LIGHT_100};
		font-size: 2.4rem;
	}

	> img {
		width: 16rem;
	}
`
