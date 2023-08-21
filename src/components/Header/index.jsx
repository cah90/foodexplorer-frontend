import { Container, ButtonCart, NavMobile } from "./styles"
import { Input } from "../Input"
import { Button } from "../Button"

import { FiMenu, FiSearch } from "react-icons/fi"
import { PiReceiptLight } from "react-icons/pi"
import { RxExit } from "react-icons/rx"
import { VscClose } from "react-icons/vsc"

import { Link } from "react-router-dom"
import { AnimatePresence, useCycle } from "framer-motion"

export function Header() {
	const [showNav, toggleNav] = useCycle(false, true)

	let spring = { type: "spring", bounce: 0.25, duration: 0.8 }

	let variants = {
		hidden: {
			y: 0,
			opacity: 0,
			transition: spring,
		},

		visible: {
			y: 170,
			opacity: 1,
			transition: spring,
		},
	}
	return (
		<>
			<Container>
				{!showNav && (
					<>
						<FiMenu className="menu" onClick={toggleNav} />

						<img src="/logo.png" alt="Logo do Food Explorer" />

						<div className="input-desktop">
							<Input
								placeholder="Busque por pratos ou ingredientes"
								icon={FiSearch}
							/>
						</div>

						<ButtonCart className="button-mobile" type="button">
							<PiReceiptLight />
							<div className="counter">0</div>
						</ButtonCart>

						<div className="button-desktop">
							<Button icon={PiReceiptLight} title={`Pedidos(${0})`} />
						</div>

						<RxExit className="exit" />
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
							placeholder="Busque por pratos ou ingredientes"
						/>

						<Link to="#">Sair</Link>
					</NavMobile>
				)}
			</AnimatePresence>
		</>
	)
}
