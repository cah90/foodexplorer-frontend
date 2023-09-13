import { Container } from "./styles"

export function Button({ title, icon: Icon, ...rest }) {
	return (
		<Container className={rest.className}>
			{Icon && <Icon />}
			{title}
		</Container>
	)
}
