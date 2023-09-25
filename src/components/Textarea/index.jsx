import { Container } from "./styles"

export function Textarea({ inputValue, ...rest }) {
	return <Container {...rest}>{inputValue}</Container>
}
