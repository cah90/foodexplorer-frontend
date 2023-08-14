import { Routes, Route } from "react-router-dom"

import { Home } from "../src/pages/Home"

export function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
		</Routes>
	)
}
