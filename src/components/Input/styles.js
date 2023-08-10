import styled from "styled-components"

export const Container = styled.div`
	display: flex;
	gap: 1.4rem;
	align-items: center;

	width: 100%;
	background-color: ${({ theme }) => theme.COLORS.DARK_900};

	border-radius: 0.5rem;
	padding: 1.2rem 1.4rem;

	> svg {
		color: ${({ theme }) => theme.COLORS.LIGHT_500};
		font-size: 2.4rem;
	}

	> input {
		width: 100%;

		border: none;
		background-color: transparent;

		font-family: var(--ff-roboto);
		font-size: 1.6rem;
		font-weight: 400;
		line-height: 100%;
		color: ${({ theme }) => theme.COLORS.LIGHT_100};

		&::placeholder {
			color: ${({ theme }) => theme.COLORS.LIGHT_500};
		}
	}
`
