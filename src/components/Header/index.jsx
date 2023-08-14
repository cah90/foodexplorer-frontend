import { Container } from "./styles"
import { CartButton } from "../CartButton"

import { FiMenu } from "react-icons/fi"

export function Header() {
	return (
		<Container>
			<FiMenu />

			<img src="/logo.png" alt="Logo do Food Explorer" />

			<CartButton />
		</Container>
	)
}
