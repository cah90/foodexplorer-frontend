import { Routes, Route } from "react-router-dom"

import { Home } from "../src/pages/Home"
import { Details } from "../src/pages/Details"

export function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/details/:id" element={<Details />} />
		</Routes>
	)
}
