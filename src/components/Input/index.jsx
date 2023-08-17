import { Container } from "./styles"

export function Input({ icon: Icon, ...rest }) {
	const { containerclass, ...inputProps } = rest

	return (
		<Container className={containerclass}>
			{Icon && <Icon />}
			<input {...inputProps} />
		</Container>
	)
}
