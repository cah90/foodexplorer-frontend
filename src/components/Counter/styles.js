import { styled } from "styled-components"

export const Container = styled.div`
	color: ${({ theme }) => theme.COLORS.LIGHT_300};

	display: flex;
	align-items: center;
	gap: 2rem;

	font-size: 1.6rem;

	> span {
		font-size: 2.4rem;
		font-weight: 700;
	}

	button {
		background: none;
		border: none;
		color: ${({ theme }) => theme.COLORS.LIGHT_300};
		font-size: 2.4rem;
		font-weight: 700;
	}

	@media (min-width: 1024px) {
		font-size: 2rem;
		/* margin: 2.4rem 0; */
	}
`
