import { Routes, Route } from "react-router-dom"

import { Home } from "../src/pages/Home"
import { Details } from "../src/pages/Details"
import { NewDish } from "../src/pages/NewDish"
import { EditDish } from "../src/pages/EditDish"

export function AdminRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/details/:id" element={<Details />} />
			<Route path="/new" element={<NewDish />} />
			<Route path="/edit" element={<EditDish />} />

			{/* <Route path="*" exact={true} element={<NotFound />} /> */}
		</Routes>
	)
}
