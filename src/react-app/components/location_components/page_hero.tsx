import { useEffect, type CSSProperties } from "react";
import { motion } from "motion/react";

import "./page_hero.css";

type PageHeroProps = {
	title: string;
	image: string;
	/**
	 * CSS background-position value (e.g. "center", "85% 20%", "left top").
	 * Lets each page pick its own focal point so the subject stays in frame
	 * across viewport aspect ratios — mobile crops differently than desktop.
	 */
	position?: string;
};

const PageHero = ({ title, image, position = "center" }: PageHeroProps) => {
	useEffect(() => {
		const previous = document.title;
		document.title = `${title} · Tracey & Jordan`;
		return () => {
			document.title = previous;
		};
	}, [title]);

	const heroStyle: CSSProperties = {
		backgroundImage: `url(${image})`,
		backgroundPosition: position,
	};

	return (
		<motion.section
			className="page-hero"
			style={heroStyle}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.6 }}
		>
			<div className="page-hero-overlay" aria-hidden="true" />
			<h1 className="page-hero-title">{title}</h1>
		</motion.section>
	);
};

export default PageHero;
