import { Container } from "./styles"

import { useState } from "react"

export function Counter() {
	const [count, setCount] = useState(0)

	const decrease = () => {
		if (count > 0) {
			setCount(count - 1)
		}
	}

	const increase = () => {
		setCount(count + 1)
	}

	return (
		<Container>
			<button onClick={decrease}> - </button>
			<span> {count} </span>
			<button onClick={increase}> + </button>
		</Container>
	)
}
