import styled from "styled-components"

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
`

export const Wrapper = styled.div`
	max-width: 50.6rem;
	margin: 4.4rem auto 6.2rem;

	padding: 0 2rem;

	flex: 1;

	.main {
		text-align: center;

		> img {
			width: 26.4rem;
			margin: 1.6rem 0;
		}

		.main-info {
			h1,
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
	}

	.tags {
		margin-bottom: 4.8rem;

		display: flex;
		justify-content: center;
		flex-wrap: wrap;
	}

	.add-item {
		display: flex;
		gap: 1.6rem;
		justify-content: space-around;

		div[type="button"] {
			max-width: 18rem;
		}
	}

	@media (min-width: 1024px) {
		max-width: 112.2rem;

		.main {
			display: flex;
			align-items: center;
			gap: 4.7rem;

			margin-bottom: 15rem;

			> img {
				width: 39rem;
			}

			.main-info {
				max-width: 68.7rem;

				h1,
				p {
					text-align: left;
				}

				> h1 {
					font-size: 4rem;
					font-weight: 500;
				}

				> p {
					font-size: 2.4rem;
					font-weight: 400;
				}

				.add-item {
					display: flex;
					justify-content: flex-start;
				}

				.tags {
					justify-content: flex-start;
				}
			}
		}
	}
`
