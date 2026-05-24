import { NavLink } from "react-router-dom";

const navLinks = [
	{ to: "/", label: "Home", end: true },
	{ to: "/our-story", label: "Our Story" },
	{ to: "/accommodations", label: "Accommodations" },
	{ to: "/location", label: "Location" },
	{ to: "/rsvp", label: "RSVP" },
];

function Header() {
	return (
		<header className="site-header">
			<div className="hero-overlay" />
			<div className="header-content">
				<h1 className="header-names">
					<span>Tracey</span>
					<span className="header-amp">&amp;</span>
					<span>Jordan</span>
				</h1>
				<p className="header-date"> · June 5, 2027 · Cana Vineyards ~ Middleburg, VA ·</p>

				<nav className="site-nav" aria-label="Primary">
					<ul>
						{navLinks.map((link) => (
							<li key={link.to}>
								<NavLink
									to={link.to}
									end={link.end}
									className={({ isActive }) =>
										isActive ? "nav-link active" : "nav-link"
									}
								>
									{link.label}
								</NavLink>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</header>
	);
}

export default Header;
