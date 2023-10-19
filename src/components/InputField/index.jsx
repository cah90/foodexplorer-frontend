import { Container } from "./styles"

import { Input } from "../Input"

export function InputField({ label, isImageLoaded, ...rest }) {
	return (
		<Container>
			<label> {label} </label>
			<Input {...rest} />
		</Container>
	)
}
