import { styled } from "styled-components"

export const Container = styled.div`
	color: ${({ theme }) => theme.COLORS.LIGHT_300};

	display: flex;
	align-items: center;
	gap: 1.4rem;

	font-size: 1.6rem;

	button {
		background: none;
		border: none;
		color: ${({ theme }) => theme.COLORS.LIGHT_300};
		font-size: 2.4rem;
	}

	@media (min-width: 1024px) {
		font-size: 2rem;
		/* margin: 2.4rem 0; */
	}
`
