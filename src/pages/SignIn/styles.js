import styled from "styled-components"

export const Container = styled.div`
	text-align: center;

	> img {
		margin: 15rem 0 7.3rem;
	}

	> a {
		color: ${({ theme }) => theme.COLORS.LIGHT_100};
		font-size: 1.4rem;
		font-weight: 500;
		line-height: 2.4rem;
	}
`

export const Form = styled.form`
	max-width: 31.6rem;
	margin: 0 auto 3.2rem;
`
