import styled from "styled-components"

export const Container = styled.div`
	display: flex;
	align-items: center;

	width: 4rem;
	height: 4rem;

	position: relative;

	.count {
		background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
		width: 2rem;
		border-radius: 100%;

		font-size: 1.4rem;
		font-weight: 500;
		line-height: 2.4rem;
		color: ${({ theme }) => theme.COLORS.LIGHT_100};

		text-align: center;

		position: absolute;
		top: 0;
		right: 0;
	}

	> svg {
		color: ${({ theme }) => theme.COLORS.LIGHT_100};
		font-size: 3.2rem;
	}
`
