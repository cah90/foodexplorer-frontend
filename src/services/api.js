import axios from "axios"

export const api = axios.create({
	baseURL: import.meta.env.BASE_API_URL || "http://localhost:3333",
})
