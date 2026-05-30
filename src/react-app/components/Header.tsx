import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const navLinks = [
	{ to: "/", label: "Home", end: true },
	{ to: "/our-story", label: "Our Story" },
	{ to: "/accommodations", label: "Accommodations" },
	{ to: "/location", label: "Location" },
	{ to: "/rsvp", label: "RSVP" },
];

function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	useEffect(() => {
		if (!isMenuOpen) return;
		const onKey = (e: KeyboardEvent) => {
			if (e.key === "Escape") setIsMenuOpen(false);
		};
		document.addEventListener("keydown", onKey);
		const previousOverflow = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		return () => {
			document.removeEventListener("keydown", onKey);
			document.body.style.overflow = previousOverflow;
		};
	}, [isMenuOpen]);

	return (
		<header className="site-header">
			<div className="hero-overlay" />

			<button
				type="button"
				className={`menu-toggle${isMenuOpen ? " is-open" : ""}`}
				aria-expanded={isMenuOpen}
				aria-controls="primary-menu"
				aria-label={isMenuOpen ? "Close menu" : "Open menu"}
				onClick={() => setIsMenuOpen((open) => !open)}
			>
				<span className="menu-bar" />
				<span className="menu-bar" />
				<span className="menu-bar" />
			</button>

			<div className="header-content">
				<h1 className="header-names">
					<span>Tracey</span>
					<span className="header-amp">&amp;</span>
					<span>Jordan</span>
				</h1>
			</div>

			<nav
				id="primary-menu"
				className={`menu-panel${isMenuOpen ? " is-open" : ""}`}
				aria-label="Primary"
				aria-hidden={!isMenuOpen}
			>
				<ul>
					{navLinks.map((link) => (
						<li key={link.to}>
							<NavLink
								to={link.to}
								end={link.end}
								onClick={() => setIsMenuOpen(false)}
								className={({ isActive }) =>
									isActive ? "menu-link active" : "menu-link"
								}
							>
								{link.label}
							</NavLink>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
}

export default Header;
