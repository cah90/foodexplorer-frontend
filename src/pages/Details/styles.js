import styled from "styled-components"

export const Wrapper = styled.div`
	max-width: 50.6rem;
	margin: 4.4rem auto 6.2rem;

	padding: 0 2rem;

	.main {
		text-align: center;

		> img {
			width: 26.4rem;
			margin: 1.6rem 0;
		}

		> h1,
		p {
			color: ${({ theme }) => theme.COLORS.LIGHT_300};
			text-align: center;
		}

		> h1 {
			font-size: 2.7rem;
			font-weight: 500;
		}

		> p {
			font-size: 1.6rem;
			font-weight: 400;

			text-align: center;
			margin: 2.4rem 0;
		}
	}

	.add-item {
		display: flex;
		gap: 1.6rem;
		justify-content: center;

		div[type="button"] {
			max-width: 18rem;
		}
	}
`
