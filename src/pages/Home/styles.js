import styled from "styled-components"

export const Wrapper = styled.div`
	max-width: 111.2rem;
	margin: 4.4rem auto 6.2rem;

	padding: 0 2rem;
`

export const Hero = styled.div`
	display: flex;
	justify-content: flex-end;

	border-radius: 0.8rem;
	background: linear-gradient(180deg, #091e26 0%, #00131c 100%);

	margin: 4.4rem 0 6.2rem;

	position: relative;
	height: 12rem;

	> img {
		width: 19.1rem;
		height: 14.9rem;

		position: absolute;
		z-index: 1;
		bottom: 0;
		left: -2rem;
	}

	> .hero-info {
		color: ${({ theme }) => theme.COLORS.LIGHT_300};

		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 0.3rem;

		margin-left: 18rem;
		padding-right: 1rem;
		text-align: center;

		> h2 {
			font-size: 1.4rem;
			font-weight: 600;
		}

		> p {
			font-size: 1.1rem;
			font-weight: 400;
		}
	}

	@media (min-width: 668px) {
		max-width: 70rem;
		padding: 0 5rem;
		margin: 4.4rem auto 6.2rem;

		> .hero-info {
			margin-left: 1rem;
			text-align: left;
			padding-right: 5rem;
			z-index: 1;

			> h2 {
				font-size: 1.8rem;
				font-weight: 500;
			}

			> p {
				font-size: 1.4rem;
				font-family: var(--ff-roboto);
			}
		}
	}

	@media (min-width: 1024px) {
		max-width: 112.2rem;
		height: 26rem;
		margin: 16.4rem auto 6.2rem;

		height: 26.4rem;

		> img {
			width: 63.2rem;
			height: 40.6rem;

			left: -6rem;
		}

		> .hero-info {
			margin-left: 1rem;
			text-align: left;
			padding-right: 5rem;

			> h2 {
				font-size: 4rem;
			}

			> p {
				font-size: 1.6rem;
			}
		}
	}
`

export const Section = styled.section`
	h2 {
		font-size: 1.8rem;
		font-weight: 500;
		color: ${({ theme }) => theme.COLORS.LIGHT_300};

		margin-bottom: 2.4rem;
	}

	@media (min-width: 1024px) {
		h2 {
			font-size: 3.2rem;
		}
	}
`
