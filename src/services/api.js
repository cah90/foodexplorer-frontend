import axios from "axios"

export const api = axios.create({
	// baseURL: "http://localhost:3333",
	//baseURL: "https://rocketfoodexplorer-api.onrender.com",
	baseURL: import.meta.env.BASE_API_URL || "http://localhost:3333",
})
