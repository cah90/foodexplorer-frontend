import styled from "styled-components"

export const Container = styled.div`
	display: flex;
	flex-direction: column;

	margin-bottom: 3.2rem;

	> label {
		text-align: left;
		margin-bottom: 0.8rem;

		font-family: var(--ff-roboto);
		font-size: 1.6rem;
		font-weight: 400;
		line-height: 100%;
		color: ${({ theme }) => theme.COLORS.LIGHT_400};
	}
`
