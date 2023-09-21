import { Container } from "./styles"

export function Counter({ count, increase, decrease }) {
	return (
		<Container>
			<button onClick={decrease}> - </button>
			<span> {count} </span>
			<button onClick={increase}> + </button>
		</Container>
	)
}
