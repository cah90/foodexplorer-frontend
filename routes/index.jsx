import { BrowserRouter } from "react-router-dom"
import { useEffect } from "react"

import { useAuth } from "../src/hooks/auth"
import { USER_ROLE } from "../src/utils/roles"
import { api } from "../src/services/api"

import { AdminRoutes } from "./admin.routes"
import { UserRoutes } from "./user.routes"
import { AuthRoutes } from "./auth.routes"

export function Routes() {
	const { user, signOut } = useAuth()

	useEffect(() => {
		api.get("/users/validated", { withCredentials: true }).catch((error) => {
			if (error.response?.status === 401) {
				signOut()
			}
		})
	}, [])

	function AccessRoute() {
		switch (user.role) {
			case USER_ROLE.ADMIN:
				return <AdminRoutes />
			case USER_ROLE.USER:
				return <UserRoutes />
			default:
				return <UserRoutes />
		}
	}

	return (
		<BrowserRouter>{user ? <AccessRoute /> : <AuthRoutes />}</BrowserRouter>
	)
}
