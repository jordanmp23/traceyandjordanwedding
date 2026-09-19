import { useEffect, useRef, type CSSProperties } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";

import "./page_hero.css";

type PageHeroProps = {
  title: string;
  image: string;
  /** CSS background-position value used as the focal point for the image. */
  position?: string;
};

const PageHero = ({ title, image, position = "center" }: PageHeroProps) => {
  const ref = useRef<HTMLElement | null>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [0, 70]);

  useEffect(() => {
    const previous = document.title;
    document.title = `${title} · Tracey & Jordan`;
    return () => {
      document.title = previous;
    };
  }, [title]);

  const heroStyle: CSSProperties = {
    backgroundPosition: position,
  };

  return (
    <motion.section
      ref={ref}
      className="page-hero"
      style={heroStyle}
      initial={reduceMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <motion.div
        className="page-hero-image"
        style={{ backgroundImage: `url(${image})`, backgroundPosition: position, y: imageY }}
        aria-hidden="true"
      />
      <div className="page-hero-overlay" aria-hidden="true" />
      <motion.div
        className="page-hero-title-wrap"
        initial={reduceMotion ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
      >
        <h1 className="page-hero-title">{title}</h1>
      </motion.div>
    </motion.section>
  );
};

export default PageHero;
