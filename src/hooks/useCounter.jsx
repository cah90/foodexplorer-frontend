import { useState } from "react"

export function useCounter(initialValue) {
	const [count, setCount] = useState(initialValue)

	const decrease = () => {
		if (count > 0) {
			setCount(count - 1)
		}
	}

	const increase = () => {
		setCount(count + 1)
	}

	return { count, increase, decrease }
}
