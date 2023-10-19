import React from "react"
import ReactDOM from "react-dom/client"
import { ThemeProvider } from "styled-components"
import { ToastContainer } from "react-toastify"

import theme from "./styles/theme"
import GlobalStyles from "./styles/global"

import { AuthProvider } from "./hooks/auth"
import { Routes } from "../routes"

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<ToastContainer autoClose={3000} theme="light" />
			<AuthProvider>
				<Routes />
			</AuthProvider>
		</ThemeProvider>
	</React.StrictMode>
)
