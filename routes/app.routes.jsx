import { Routes, Route } from "react-router-dom"

import { Home } from "../src/pages/Home"
import { Details } from "../src/pages/Details"
import { NewDish } from "../src/pages/NewDish"

export function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/details/:id" element={<Details />} />
			<Route path="/new" element={<NewDish />} />
		</Routes>
	)
}
