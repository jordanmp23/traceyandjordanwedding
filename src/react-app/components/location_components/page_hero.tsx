import { useEffect, type CSSProperties } from "react";
import { motion } from "motion/react";

import "./page_hero.css";

type PageHeroProps = {
	title: string;
	image: string;
};

const PageHero = ({ title, image }: PageHeroProps) => {
	useEffect(() => {
		const previous = document.title;
		document.title = `${title} · Tracey & Jordan`;
		return () => {
			document.title = previous;
		};
	}, [title]);

	return (
		<motion.section
			className="page-hero"
			style={{ backgroundImage: `url(${image})` } as CSSProperties}
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
