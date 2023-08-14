import { Container } from "./styles"

import { PiReceiptLight } from "react-icons/pi"

export function CartButton() {
	return (
		<Container>
			<div className="count">0</div>
			<PiReceiptLight />
		</Container>
	)
}
