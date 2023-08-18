import { Container, ButtonCartMobile, NavMobile } from "./styles"
import { Input } from "../Input"

import { FiMenu, FiSearch } from "react-icons/fi"
import { PiReceiptLight } from "react-icons/pi"
import { VscClose } from "react-icons/vsc"
import { RxExit } from "react-icons/rx"

import { useState } from "react"
import { Link } from "react-router-dom"
import { AnimatePresence, useCycle } from "framer-motion"

export function Header() {
	const [showNav, toggleNav] = useCycle(false, true)

	let variants = {
		hidden: {
			opacity: 0,
		},

		visible: {
			opacity: 1,
			transition: { type: "spring", stiffness: 90 },
		},

		exit: {
			opacity: 0,
		},
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
			<AnimatePresence>
				{showNav && (
					<NavMobile
						initial="hidden"
						animate="visible"
						exit="hidden"
						variants={variants}
					>
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
			</AnimatePresence>
		</>
	)
}
