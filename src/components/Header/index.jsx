import { Container, Nav } from "./styles"
import { CartButton } from "../CartButton"
import { Input } from "../Input"

import { FiMenu, FiSearch } from "react-icons/fi"
import { VscClose } from "react-icons/vsc"

import { useState } from "react"
import { Link } from "react-router-dom"

export function Header() {
	const [showNav, setShowNav] = useState(false)

	const toggleNav = () => {
		setShowNav(!showNav)
	}

	return (
		<Container>
			{!showNav && (
				<>
					<FiMenu onClick={toggleNav} />

					<img src="/logo.png" alt="Logo do Food Explorer" />

					<CartButton />
				</>
			)}

			{showNav && (
				<Nav>
					<header>
						<VscClose onClick={toggleNav} />
						<p>Menu</p>
					</header>

					<Input
						icon={FiSearch}
						placeholder={"Busque por pratos ou ingredientes"}
					/>

					<Link to="#">Sair</Link>
					{/* <a href="#">Sair</a> */}
				</Nav>
			)}
		</Container>
	)
}
