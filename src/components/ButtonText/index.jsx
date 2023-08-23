import { Container } from "./styles"

export function ButtonText({ title }) {
	return (
		<Container type="button">
			<span>&lt;</span>
			{title}
		</Container>
	)
}
