import { Container } from "./styles"

import { BeatLoader } from "react-spinners"

export function Button({ title, loading = false, icon: Icon, ...rest }) {
	return (
		<Container type="button" disabled={loading} {...rest}>
			{Icon && <Icon />}
			{loading ? (
				<BeatLoader loading={loading} color="#fff" size={10} />
			) : (
				title
			)}
		</Container>
	)
}
