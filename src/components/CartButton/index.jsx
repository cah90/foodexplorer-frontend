import { Container } from "./styles"

import { PiReceiptLight } from "react-icons/pi"

export function CartButton({ title, cart }) {
	return (
		<Container>
			<PiReceiptLight />
			<p>
				{title} ({cart})
			</p>
			<div className="count">{cart}</div>
		</Container>
	)
}
