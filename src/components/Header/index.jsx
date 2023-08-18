import { Container, ButtonCartMobile, NavMobile } from "./styles"
import { Input } from "../Input"

import { FiMenu, FiSearch } from "react-icons/fi"
import { PiReceiptLight } from "react-icons/pi"
import { VscClose } from "react-icons/vsc"
import { RxExit } from "react-icons/rx"

import { useState } from "react"
import { Link } from "react-router-dom"
import { motion, useCycle } from "framer-motion"

export function Header() {
	const [showNav, setShowNav] = useState(false)
	//const [showNav, toggleNav] = useCycle(false, true)

	const toggleNav = () => {
		setShowNav(!showNav)
	}

	return (
		<>
			<Container>
				{!showNav && (
					<>
						<FiMenu className="menu" onClick={toggleNav} />

						<img src="/logo.png" alt="Logo do Food Explorer" />

						<ButtonCartMobile type="button">
							<PiReceiptLight />
							<div className="counter">0</div>
						</ButtonCartMobile>
					</>
				)}
			</Container>
			{showNav && (
				<NavMobile initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
					<header>
						<VscClose onClick={toggleNav} />
						<p>Menu</p>
					</header>

					<Input
						icon={FiSearch}
						placeholder={"Busque por pratos ou ingredientes"}
					/>

					<Link to="#">Sair</Link>
				</NavMobile>
			)}
		</>
	)
}
