import { Container } from "./styles"

import { Input } from "../Input"

export function Field({ label, ...rest }) {
	return (
		<Container>
			<label> {label} </label>

			<Input {...rest} />
		</Container>
	)
}
