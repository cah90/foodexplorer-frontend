import styled from "styled-components"

export const Container = styled.div`
	text-align: center;

	> img {
		margin: 15rem 0 7.3rem;
	}

	a {
		color: ${({ theme }) => theme.COLORS.LIGHT_100};
		font-size: 1.4rem;
		font-weight: 500;
		line-height: 2.4rem;
	}

	@media (min-width: 1000px) {
		display: flex;
		justify-content: space-around;
		align-items: center;
		gap: 10rem;

		height: 100vh;

		max-width: 80%;
		margin: 0 auto;

		> img {
			width: 32.4rem;
			height: 4.8rem;

			margin: 0;
		}

		.wrapper {
			flex-basis: 47.6rem;

			padding: 6.4rem;
			border-radius: 1.6rem;
			background-color: ${({ theme }) => theme.COLORS.DARK_700};
		}
	}
`

export const Form = styled.form`
	max-width: 31.6rem;

	margin: 0 auto 3.2rem;

	> h2 {
		display: none;
	}

	@media (min-width: 1000px) {
		> h2 {
			display: inline-block;
			font-size: 3.2rem;
			font-weight: 500;
			color: ${({ theme }) => theme.COLORS.LIGHT_100};

			margin-bottom: 3.2rem;
		}
	}
`
