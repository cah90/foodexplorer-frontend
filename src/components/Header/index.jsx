import { Container, ButtonCart, NavMobile } from "./styles"
import { Input } from "../Input"
import { Button } from "../Button"

import { FiMenu, FiSearch } from "react-icons/fi"
import { PiReceiptLight } from "react-icons/pi"
import { RxExit } from "react-icons/rx"
import { VscClose } from "react-icons/vsc"

import { useAuth } from "../../hooks/auth"
import { USER_ROLE } from "../../utils/roles"

import { Link, useNavigate } from "react-router-dom"
import { AnimatePresence, useCycle } from "framer-motion"

export function Header() {
	const { user, signOut } = useAuth()

	const [showNav, toggleNav] = useCycle(false, true)

	const navigate = useNavigate()

	function handleSignOut() {
		signOut()
		navigate("/")
	}

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

						<Link to={"/"}>
							{user.role === USER_ROLE.ADMIN ? (
								<img
									className="adminLogo"
									src="/logo-admin.png"
									alt="Logo do Admin Food Explorer"
								/>
							) : (
								<img
									className="userLogo"
									src="/logo.png"
									alt="Logo do Food Explorer"
								/>
							)}
						</Link>

						<div className="input-desktop">
							<Input
								placeholder="Busque por pratos ou ingredientes"
								icon={FiSearch}
							/>
						</div>

						{user.role === USER_ROLE.USER && (
							<ButtonCart className="button-mobile" type="button">
								<PiReceiptLight />
								<div className="counter">0</div>
							</ButtonCart>
						)}

						{user.role === USER_ROLE.ADMIN ? (
							<div className="button-desktop">
								<Link to="/new">
									<Button title="Novo prato" />
								</Link>
							</div>
						) : (
							<div className="button-desktop">
								<Button icon={PiReceiptLight} title={`Pedidos(${0})`} />
							</div>
						)}

						<RxExit className="exit" onClick={handleSignOut} />
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

						{user.role === USER_ROLE.ADMIN && <Link to="/new">Novo Prato</Link>}

						<a onClick={handleSignOut}>Sair</a>
					</NavMobile>
				)}
			</AnimatePresence>
		</>
	)
}
