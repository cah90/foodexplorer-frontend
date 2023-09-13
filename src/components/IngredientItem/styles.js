import styled from "styled-components"

export const Container = styled.div`
	display: flex;
	align-items: center;

	background-color: ${({ theme, $isNew }) =>
		$isNew ? "transparent" : theme.COLORS.LIGHT_600};

	border: ${({ theme, $isNew }) =>
		$isNew ? `1px dashed ${theme.COLORS.LIGHT_500}` : "none"};

	border-radius: 10px;
	padding-right: 16px;

	> button {
		border: none;
		background: none;
	}

	.button-delete {
		color: ${({ theme }) => theme.COLORS.LIGHT_100};
	}

	.button-add {
		color: ${({ theme }) => theme.COLORS.LIGHT_500};
	}

	> input {
		width: 100%;

		padding: 1rem 1.6rem;

		color: ${({ theme }) => theme.COLORS.LIGHT_100};
		font-family: var(--ff-roboto);
		font-size: 1.6rem;
		font-weight: 400;
		background: transparent;

		border: none;
		outline: none;
	}
`
