import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import { createContext, useContext, useState, useEffect } from "react"

export const AuthContext = createContext({})

import { api } from "../services/api"

function AuthProvider({ children }) {
	const [data, setData] = useState({})

	async function signIn({ email, password }) {
		try {
			const response = await api.post(
				"sessions",
				{ email, password },
				{ withCredentials: true }
			)

			const { user } = response.data

			localStorage.setItem("@explorer:user", JSON.stringify(user))

			setData({ user })
		} catch (error) {
			if (!email || !password) {
				toast.error("Digite todos os campos para fazer o login.")
			} else if (error.response) {
				toast.error(error.response.data.message)
			} else {
				toast.error("Não foi possível entrar.")
			}
		}
	}

	function signOut() {
		localStorage.removeItem("@explorer:user")

		setData({})
	}

	useEffect(() => {
		const user = localStorage.getItem("@explorer:user")

		if (user) {
			setData({
				user: JSON.parse(user),
			})
		}
	}, [])

	return (
		<AuthContext.Provider
			value={{
				signIn,
				signOut,
				user: data.user,
			}}
		>
			{children}
		</AuthContext.Provider>
	)
}

function useAuth() {
	const context = useContext(AuthContext)

	return context
}

export { AuthProvider, useAuth }
