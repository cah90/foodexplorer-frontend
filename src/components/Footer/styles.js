import styled from "styled-components"

export const Container = styled.footer`
	background-color: ${({ theme }) => theme.COLORS.DARK_600};

	display: flex;
	align-items: center;
	justify-content: space-around;
	gap: 0.8rem;

	padding: 2.4rem 2rem;

	> img {
		height: 1.8rem;
	}

	> span {
		font-family: "Roboto", sans-serif;
		font-size: 1.2rem;
		font-weight: 400;
		color: ${({ theme }) => theme.COLORS.LIGHT_200};
	}

	@media (min-width: 1024px) {
		justify-content: space-between;
		padding: 2.4rem 12.3rem;

		> img {
			height: 2.5rem;
		}

		> span {
			font-size: 1.4rem;
		}
	}
`
